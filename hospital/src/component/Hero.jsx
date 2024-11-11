import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'


export default function Hero() {

  return (

    // /************** hero ************** */
    <>
      <div className='hero '>
        {/* start */}


        <div className='handing'>
          <h1>Empowering health Choices for a Vibrant life Your Trusted..</h1>
          <h3>Healthcare for Good Today. Tomorrow. Always</h3>
          <p>Hospital Ltd. Hospital . The main objective of this hospital is to provide a cost-effective standard of health care. The main objective this hospital is to provide a cost-effective.</p>
        </div>

        {/* *************mid **************************/}
        <Link to='https://www.who.int/health-topics/coronavirus#tab=tab_1'>
          <div className='mid'>
            <h1>COVID-19 INFORMATION</h1>
            <h2>Everything You Need To Know About COVID-19 : Symptoms, Diagnosis, Treatment & Vaccination</h2>
          </div>
        </Link>

        {/* *****************************our service***************************** */}

        <div className='Service'>
          <div className='servicetop'>
            <h1>Our Service</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, possimus.</p>
          </div>

          <div className='servicedown'>
            <div className="servicebox">
              <img src="https://cdn-icons-png.flaticon.com/128/3127/3127109.png" alt="" />
              <h1>Lab Test</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam sed ullam aperiam fuga earum corporis!</p>
              <Link to='https://www.nhs.uk/live-well/eat-well/how-to-eat-a-balanced-diet/eight-tips-for-healthy-eating/' ><h3>Learn more</h3></Link>
            </div>
            <div className="servicebox">
              <img src="https://cdn-icons-png.flaticon.com/128/16505/16505235.png" alt="" />
              <h1>Health Check</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam sed ullam aperiam fuga earum corporis!</p>
              <Link to='https://www.nhs.uk/live-well/eat-well/how-to-eat-a-balanced-diet/eight-tips-for-healthy-eating/' ><h3>Learn more</h3></Link>
            </div>
            <div className="servicebox">
              <img src="https://cdn-icons-png.flaticon.com/128/3411/3411630.png" alt="" />
              <h1>Heard Health</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam sed ullam aperiam fuga earum corporis!</p>
              <Link to='https://www.nhs.uk/live-well/eat-well/how-to-eat-a-balanced-diet/eight-tips-for-healthy-eating/' ><h3>Learn more</h3></Link>
            </div>
          </div>
        </div>

        {/* *******************************question*************************** */}

        <div className='question'>
          <div className='questionbox'>
            <details>
              <summary>What to eat first?
              </summary>
              The researchers found consistent evidence that eating your carbs last will help lower your blood glucose response to the meal. Inchauspé sums up the research by saying that the best order to maintain stable blood glucose levels is: 'Vegetables first, proteins and fats second, starches and sugars last.
            </details>
          </div>
          <div className='questionbox'>
            <details>
              <summary>
                How to improve your health quickly?</summary>Enjoy de-stressing. Experts recommend regular exercise, meditation and breathing techniques to reduce stress. ...
              Put away the salt. ...
              Get to bed earlier. ...
              Have a glass of red wine. ...
              Check your posture and ergonomics. ...
              Do a crossword puzzle. ...
              Weigh in. ...
              Make a few dietary substitutions.
            </details>
          </div>
          <div className='questionbox'>
            <details>
              <summary>How to eat food correctly?</summary>
              Eat slowly and cut only a few small bites of your meal at a time.
              Chew with your mouth closed and do not talk with food in your mouth.
              Pass food items to the right (i.e. bread, salad dressings). ...
              Pass salt and pepper together, one in each hand. ...
              Taste your food before seasoning it.</details>
          </div>
          <div className='questionbox'>
            <details>
              <summary>Is Fruit good for breakfast?</summary>
              Fruits are a light breakfast option, and some whole fruits can make an easy snack during your commute. All fruits are relatively low in calories and contain fiber, vitamins, minerals, and simple sugars. The fiber in fruit helps slow your body's absorption of its sugars, giving you a steady energy source.</details>
          </div>
        </div>

        {/* ************************Doctor********************************** */}

        <div className='doctor'>
          <div className='doctortop'>
            <h1>Our Doctors</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, corporis!</p>
          </div>

          <div className='doctordown'>
            <div className='doctorbox'>
              <img src="https://cdn.pixabay.com/photo/2023/07/03/13/13/ai-generated-8104159_640.jpg" alt="" />
              <h1>Dr.Ethan Carter</h1>
              <p>Dematologist</p>
            </div>
            <div className='doctorbox'>
              <img src="https://cdn.pixabay.com/photo/2024/02/16/21/37/ai-generated-8578391_640.png" alt="" />
              <h1>Dr.Olivia Martinez</h1>
              <p>Ophthalmologist</p>
            </div>
            <div className='doctorbox'>
              <img src="https://cdn.pixabay.com/photo/2024/03/29/03/30/ai-generated-8662131_640.png" alt="" />
              <h1>Dr.Serena Mitchell</h1>
              <p>Orthopedic</p>
            </div>
            <div className='doctorbox'>
              <img src="https://cdn.pixabay.com/photo/2024/02/21/15/01/doctor-8587851_640.png" alt="" />
              <h1>Dr. Ethan Carter</h1>
              <p>Dematologist</p>
            </div>
            <div className='doctorbox'>
              <img src="https://cdn.pixabay.com/photo/2024/03/30/01/07/woman-8663875_640.png" alt="" />
              <h1>Dr.Olivia Martinez</h1>
              <p>Ophthalmologist</p>
            </div>
            <div className='doctorbox'>
              <img src="https://cdn.pixabay.com/photo/2024/01/12/22/04/nurse-8504821_640.png" alt="" />
              <h1>Dr. Ethan Carter</h1>
              <p>Dematologist</p>
            </div>
          </div>
        </div>

        {/* ************************************YouTube*************************** */}

        <div className='youtube'>
        <div className='youtubebox 2 '>
          <iframe src="https://www.youtube.com/embed/iKI_SiWy1DM?si=Mtpfgb2BSFdV1U6w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
         
          <div className='youtubebox 1 '>
          <iframe src="https://www.youtube.com/embed/ViaGuzjOqVE?si=_oP2VFl-AoLNeZVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
         
          
        </div>







        {/* end */}
      </div>
    </>
  )
}
