export function SpaceCurrency(initialCurrency:number) {
    const value = (Array as any).from(String(initialCurrency))
        .reverse()
        .join('')
        .match(/\d{1,3}/g)
        ?.reverse()
        .map((o: string) => 
            (Array as any).from(o)
                .reverse()
                .join(''),
        )
        .join(' ');
}
