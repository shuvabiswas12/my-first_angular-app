import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'titleCase'
})

export class TitleCasePipe implements PipeTransform {
    transform(sentence: string) {
        if (!sentence.trim()) return null;

        let words = sentence.split(' ');
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            if (word.length > 0) {
                if (i == 0) {
                    words[i] = this.toTitleCase(word)
                    continue;
                }

                if (this.isPreposition(word)) {
                    continue;
                }
                else {
                    words[i] = this.toTitleCase(word);
                }
            }
        }
        return words.join(' ');
    }

    private toTitleCase(word: string): string {
        let characters = word.split('');
        let firstLetter = characters[0].toUpperCase();
        characters[0] = firstLetter;

        return characters.join('')
    }

    private isPreposition(word: string): boolean {
        let prepositions = [
            'of',
            'the',
            'in',
            'before',
            'after',
            'upon',
            'at',
            'on',
            'towards',
            'off',
            'against',
            'beyond',
            'despite',
            'by',
            'for',
            'form',
            'with',
            'into',
            'within'
        ]
        return prepositions.includes(word.toLowerCase());
    }


}