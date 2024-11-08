import { useState } from 'react'
import '../App.css'

function Counter() {
  const imgUrls = [
    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/68/8831473/1.jpg?7987",
    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/68/8831473/2.jpg?7987",
    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/68/8831473/3.jpg?7987",
    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/68/8831473/4.jpg?7987",
  ];
  // const [getter, setter] = useState(defaultValue);
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState('Great counter app!');
  const [imgUrl, setImgUrl] = useState(imgUrls[0]);
  
  // handle update message
  const handleUpdateMessage = () => {
    switch (counter) {
      case 10:
        setMessage('Tens Counter Value!');
        break;
      case 20:
        setMessage('Twenty Counter Value!');
        break;
      case 30:
        setMessage('Keep going!');
        break;
      case 40:
        setMessage('Almost there!');
        break;
      case 50:
        setMessage('You did it!');
        break;
      default:
        setMessage('You are awesome!');
        break;
    }
  }
  // handle increment
  const handleIncrement = () => {
    setCounter(counter + 1);
    handleUpdateMessage();
   }

  // handle decrement
  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      handleUpdateMessage();
    }
  }

  // handle change image
  const handleChangeImage = (url) => {
    setImgUrl(url);
  }

  return (
    <div>
      <h1>{message}</h1>
      <h1>Count: {counter}</h1>

      <div>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
      </div>

      <div className='img-con'>
        <img
          src={imgUrl}
          alt="product image"
        />

        <div>
          {imgUrls.map((imgUrl, index) => (
            <img
              key={index}
              src={imgUrl}
              alt={`product image ${index}`}
              className='img'
              onClick={() => handleChangeImage(imgUrl)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Counter
