export const getFormValues = <ExpectedType = Record<string, string>>(form: HTMLFormElement): Partial<ExpectedType> => {
    const formData = new FormData(form);

    return Object.fromEntries(formData.entries()) as Partial<ExpectedType>;
};
