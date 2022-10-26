export const FormatadorService = {
    monetary_value(value: number): string {
        return value.toLocaleString('pt-BR',
            {
                minimumFractionDigits: 2,
                style: 'currency',
                currency: 'BRL'
            }
        );
    },
    limitText(text: string, maxSize: number): string {
        if (text.length < maxSize) {
            return text;
        }

        return text.slice(0, maxSize) + '...';
    }
}