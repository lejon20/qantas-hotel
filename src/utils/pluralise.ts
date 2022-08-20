const pluralise = (count: number, term: string, pluralForm: string) =>
  count === 1 ? term : pluralForm;

export default pluralise;
