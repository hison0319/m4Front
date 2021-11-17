import { useState, useCallback } from 'react';

function useTextInput(initialForm) {
  const [form, setForm] = useState(initialForm);
  const onChangeText = useCallback((e) => {
    const { name, value } = e.target;
    setForm(form => ({ ...form, [name]: value }));
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return [form, onChangeText, reset];
}

export default useTextInput;