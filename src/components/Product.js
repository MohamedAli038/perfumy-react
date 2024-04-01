import one from "../assets/images/image1.jpeg"
import two from "../assets/images/image2.jpeg"
import three from "../assets/images/image3.jpeg"


function Products()
{
  return(
    <div class="Products">
      <div class="box">
    <img src={one} alt="one"/>
    
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis beatae ratione, at pariatur sequi doloremque!</p>
    <input  class="submit" type="submit" name="Order Now" value="Order Now"/>
    </div>

    <div class="box">
        <img src={two} alt = "two"/>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis beatae ratione, at pariatur sequi doloremque!</p>
        <input  class="submit" type="submit" name="Order Now" value="Order Now"/>
        </div>


        <div class="box">
            <img src={three} alt = "three" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis beatae ratione, at pariatur sequi doloremque!</p>
            <input  class="submit" type="submit" name="Order Now" value="Order Now"/>
            </div>

            </div>

  )
}

export default Products