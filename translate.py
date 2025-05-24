import os
import json
import re
from pathlib import Path
from transformers import MarianMTModel, MarianTokenizer

# Языки и их модели
LANG_MODELS = {
    "en": "Helsinki-NLP/opus-mt-ru-en",
    "es": "Helsinki-NLP/opus-mt-ru-es",
    "ua": "Helsinki-NLP/opus-mt-ru-uk"
}

# Папки
BASE_DIR = Path(__file__).resolve().parent
LOCALES_DIR = BASE_DIR / "public" / "locales"

def load_translation(lang):
    path = LOCALES_DIR / lang / "translation.json"
    if not path.exists():
        return {}
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)

def save_translation(lang, data):
    path = LOCALES_DIR / lang / "translation.json"
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

# Заменяем <highlight>...</highlight> на плейсхолдеры перед переводом
def mask_tags(text):
    return re.sub(r"<highlight>(.*?)</highlight>", r"@@\1@@", text)

# Восстанавливаем теги после перевода
def unmask_tags(text):
    return re.sub(r"@@(.*?)@@", r"<highlight>\1</highlight>", text)

def translate_texts(texts, model_name):
    tokenizer = MarianTokenizer.from_pretrained(model_name)
    model = MarianMTModel.from_pretrained(model_name)
    masked_texts = [mask_tags(t) for t in texts]
    batch = tokenizer.prepare_seq2seq_batch(masked_texts, return_tensors="pt", padding=True)
    translated = model.generate(**batch)
    decoded = [tokenizer.decode(t, skip_special_tokens=True) for t in translated]
    return [unmask_tags(d) for d in decoded]

def main():
    print("🔁 Запуск автоперевода...")
    russian = load_translation("ru")

    for lang, model_name in LANG_MODELS.items():
        if lang == "ru":
            continue

        print(f"\n🌐 Перевод на {lang}...")
        current = load_translation(lang)

        keys_to_translate = []
        texts_to_translate = []

        for key, ru_text in russian.items():
            cur_text = current.get(key, None)
            if cur_text != ru_text:
                keys_to_translate.append(key)
                texts_to_translate.append(ru_text)
                print(f"➤ Ключ для перевода: {key}")

        if not texts_to_translate:
            print("✅ Нет новых ключей для перевода.")
            continue

        translated_texts = translate_texts(texts_to_translate, model_name)

        for i, key in enumerate(keys_to_translate):
            current[key] = translated_texts[i]

        save_translation(lang, current)
        print(f"✅ {lang}: Переведено {len(translated_texts)} ключей.")

if __name__ == "__main__":
    main()
