# Task 1. Caesar cipher CLI tool

### Шифр Цезаря

[https://ru.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F]

Программа принимает 4 аргумента:

1.  **-s, --shift**: a shift (сдвиг);
2.  **-a, --action**: an action encode/decode (действие - кодирование/расшифровка);
3.  **-i, --input**: an input file (входной файл);
4.  **-o, --output**: an output file (выходной файл);

**Детали:**

1. **-s, --shift** обязательный аргумент типа number(число);  
Аргумент **-s, --shift** должен быть положительным;

2. **-a, --action** обязательный аргумент типа string(строка);  
   Аргумент **-a, --action** должен быть строкой вида 'encode' или 'decode';

3. **-i, --input** необязательный аргумент типа string(строка);  
   Если аргумент **-i, --input** отсутствует, ввод текста выполняется через командную строку;
4. **-o, --output** необязательный аргумент типа string(строка);  
   Если аргумент **-o, --output** отсутствует, вывод текста выполняется в командную строку;  
   Если в аргументы **-i, --input** **-o, --output** переданы неправильные пути к файлам или файлы не существуют, то будет ошибка;

- **caesar_cli.js** является основным входным файлом программы.
- **caesar.js** файл алгоритма "Шифр Цезаря".
- **streams.js** файл с реализацией input/transform/output стримов.
- **util.js** файл с дополнительными функциям проверки аргументов.

**Примеры правильного ввода:**

```bash
$ node caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

```bash
$ node caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
```

```bash
$ node caesar_cli --action encode --shift 7  --output encoded.txt
```

```bash
$ node caesar_cli -a encode -s 7 -i "./input.txt"
```

```bash
$ node caesar_cli --action encode --shift 7 --output output.txt
```

```bash
$ node caesar_cli --action encode --shift 7
```
