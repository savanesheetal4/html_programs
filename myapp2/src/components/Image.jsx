import sunflower from '../assets/sunflower.jpg'
const Image = () => {
  return (
    <div>
        <img src={sunflower} height={250} width={200}/>
        <br/>
        <img src={'/src/assets/sunflower.jpg'} height={250} width={200}/>
    </div>
  )
}

export default Image