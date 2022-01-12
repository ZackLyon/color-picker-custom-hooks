import { useState } from 'react';

export default function useColorPicker() {
  // const [fgColor, setFgColor] = useState('#ffcc00');
  // const [bgColor, setBgColor] = useState('#212121');
  // const [content, setContent] = useState('Hello, world!');
  // const [didChangeColor, setDidChangeColor] = useState(false);

  const [{ fgColor, bgColor, content, didChangeColor }, setStates] = useState({
    fgColor: '#ffcc00',
    bgColor: '#212121',
    content: 'Hello, world!',
    didChangeColor: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const colorChanged = name !== 'content';

    setStates((prev) => ({
      ...prev,
      didChangeColor: colorChanged,
      [name]: [value],
    }));
  };

  return [{ fgColor, bgColor, content, didChangeColor }, handleChange];
}
