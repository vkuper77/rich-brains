export function initialDate(age: number): Date {
    const currentDate = new Date();
    return new Date(
        currentDate.getFullYear() - age,
        currentDate.getMonth(),
        currentDate.getDate()
    );
}

export function formattedBirthDate(age: string): string {
    const currentDate = new Date();
    const birthYear = currentDate.getFullYear() - Number(age);
    const birthDate = new Date(birthYear, currentDate.getMonth(), currentDate.getDate());
    return `${birthDate.getDate().toString().padStart(2, '0')}.${(birthDate.getMonth() + 1).toString().padStart(2, '0')}.${birthDate.getFullYear()}`;
}
