import { useState, useCallback } from 'react';

function useTextInput(initialForm) {
  const [form, setForm] = useState(initialForm);
  // change
  const onCheck = useCallback((e) => {
    const { name, checked } = e.target;
    setForm(form => ({ ...form, [name]: checked }));
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return [form, onCheck, reset];
}

export default useTextInput;