interface ICountLettes {
    letter: string;
    amount: number;
}

export const countLetters = (
    str: string,
    reTurnType: 'string' | 'array',
): string | ICountLettes[] => {
    if (!/^\w*$/.test(str)) {
        return `Invalid string for counting`;
    }
    const regex = /(\w)\1*/g;
    str = str.replace(
        regex,
        ({ length }, letter) => `${letter}${length - 1 ? length : ''}`,
    );

    if (reTurnType === 'string') {
        return str;
    } else if (reTurnType === 'array') {
        const letters = str.match(/\w\d*/g)!.map((item: string) => {
            const [letter, amount] = [item[0], +(item.slice(1) || 1)];

            return {
                letter,
                amount,
            } as ICountLettes;
        });

        return letters;
    }

    return `Invalid returType`;
};
