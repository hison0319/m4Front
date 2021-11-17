import { useState, useCallback } from 'react';

function useNumberInput(initialForm) {
  const [form, setForm] = useState(initialForm);
  const onChangeNumber = useCallback((e) => {
    const { name, value } = e.target;
    setForm(form => ({ ...form, [name]: Number(value) }));
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return [form, onChangeNumber, reset];
}

export default useNumberInput;