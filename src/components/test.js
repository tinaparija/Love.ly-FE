import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Test extends Component{
  render(){
    return (
      <div class="wrap">
        <h1 class="likert-header"></h1>
        <form action="">

        <div className="physicalNeeds">
          <label class="statement"> A sense of humor is a must . </label>
          <ul class='likert'>
            <li>
              <input type="checkbox" name="likert" value=" 5 " />
              <label>Strongly agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 4 " />
              <label>Agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 3 " />
              <label>Neutral</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 2 " />
              <label>Disagree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 1 " />
              <label>Strongly disagree</label>
            </li>
          </ul>
          <label class="statement"> Laughter is the best medicine. </label>
          <ul class='likert'>
            <li>
              <input type="checkbox" name="likert" value=" 5 " />
              <label>Strongly agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 4 " />
              <label>Agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 3 " />
              <label>Neutral</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 2 " />
              <label>Disagree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 1 " />
              <label>Strongly disagree</label>
            </li>
          </ul>
          <label class="statement"> I want to date someone that knows how to make me laugh. </label>
          <ul class='likert'>
            <li>
              <input type="checkbox" name="likert" value=" 5 " />
              <label>Strongly agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 4 " />
              <label>Agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 3 " />
              <label>Neutral</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 2 " />
              <label>Disagree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 1 " />
              <label>Strongly disagree</label>
            </li>
          </ul>
          <label class="statement"> I’m funny, and I like funny people . </label>
          <ul class='likert'>
            <li>
              <input type="checkbox" name="likert" value=" 5 " />
              <label>Strongly agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 4 " />
              <label>Agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 3 " />
              <label>Neutral</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 2 " />
              <label>Disagree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 1 " />
              <label>Strongly disagree</label>
            </li>
          </ul>
          <label class="statement"> Its always a good time for a joke  . </label>
          <ul class='likert'>
            <li>
              <input type="checkbox" name="likert" value=" 5 " />
              <label>Strongly agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 4 " />
              <label>Agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 3 " />
              <label>Neutral</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 2 " />
              <label>Disagree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 1 " />
              <label>Strongly disagree</label>
            </li>
          </ul>
          <br />
          <label class="statement"> I want to date a smart person. </label>
          <ul class='likert'>
            <li>
              <input type="checkbox" name="likert" value=" 5 " />
              <label>Strongly agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 4 " />
              <label>Agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 3 " />
              <label>Neutral</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 2 " />
              <label>Disagree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 1 " />
              <label>Strongly disagree</label>
            </li>
          </ul>
        </div>

      <br />
        <div className="intellegence">
          <label class="statement"> A beautiful mind is a terrible thing to waste . </label>
          <ul class='likert'>
            <li>
              <input type="checkbox" name="likert" value=" 5 " />
              <label>Strongly agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 4 " />
              <label>Agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 3 " />
              <label>Neutral</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 2 " />
              <label>Disagree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 1 " />
              <label>Strongly disagree</label>
            </li>
          </ul>
          <label class="statement"> Intelligence is a value resource to society. </label>
          <ul class='likert'>
            <li>
              <input type="checkbox" name="likert" value=" 5 " />
              <label>Strongly agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 4 " />
              <label>Agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 3 " />
              <label>Neutral</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 2 " />
              <label>Disagree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 1 " />
              <label>Strongly disagree</label>
            </li>
          </ul>
          <label class="statement"> I find smart people attractive . </label>
          <ul class='likert'>
            <li>
              <input type="checkbox" name="likert" value=" 5 " />
              <label>Strongly agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 4 " />
              <label>Agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 3 " />
              <label>Neutral</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 2 " />
              <label>Disagree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 1 " />
              <label>Strongly disagree</label>
            </li>
          </ul>
          <label class="statement"> Intelligent conversation draws me to want to get to know someone more. </label>
          <ul class='likert'>
            <li>
              <input type="checkbox" name="likert" value=" 5 " />
              <label>Strongly agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 4 " />
              <label>Agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 3 " />
              <label>Neutral</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 2 " />
              <label>Disagree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 1 " />
              <label>Strongly disagree</label>
            </li>
          </ul>
    </div>

      <br />
        <div className="Empathy">
          <label class="statement"> People’s feelings matter. </label>
          <ul class='likert'>
            <li>
              <input type="checkbox" name="likert" value=" 5 " />
              <label>Strongly agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 4 " />
              <label>Agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 3 " />
              <label>Neutral</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 2 " />
              <label>Disagree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 1 " />
              <label>Strongly disagree</label>
            </li>
          </ul>
          <label class="statement"> Sometimes doing good for others is worth it even if you lose out because of it . </label>
          <ul class='likert'>
            <li>
              <input type="checkbox" name="likert" value=" 5 " />
              <label>Strongly agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 4 " />
              <label>Agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 3 " />
              <label>Neutral</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 2 " />
              <label>Disagree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 1 " />
              <label>Strongly disagree</label>
            </li>
          </ul>
          <label class="statement"> When I see people less fortunate, it makes me sad . </label>
          <ul class='likert'>
            <li>
              <input type="checkbox" name="likert" value=" 5 " />
              <label>Strongly agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 4 " />
              <label>Agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 3 " />
              <label>Neutral</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 2 " />
              <label>Disagree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 1 " />
              <label>Strongly disagree</label>
            </li>
          </ul>
          <label class="statement"> I want to help the world . </label>
          <ul class='likert'>
            <li>
              <input type="checkbox" name="likert" value=" 5 " />
              <label>Strongly agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 4 " />
              <label>Agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 3 " />
              <label>Neutral</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 2 " />
              <label>Disagree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 1 " />
              <label>Strongly disagree</label>
            </li>
          </ul>
          <label class="statement"> I can’t stand to see suffering. </label>
          <ul class='likert'>
            <li>
              <input type="checkbox" name="likert" value=" 5 " />
              <label>Strongly agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 4 " />
              <label>Agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 3 " />
              <label>Neutral</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 2 " />
              <label>Disagree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 1 " />
              <label>Strongly disagree</label>
            </li>
          </ul>
        </div>

          <br />
          <div className="materialistic">
          <label class="statement"> Life is greatly enhanced by the comforts that money can buy . </label>
          <ul class='likert'>
            <li>
              <input type="checkbox" name="likert" value=" 5 " />
              <label>Strongly agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 4 " />
              <label>Agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 3 " />
              <label>Neutral</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 2 " />
              <label>Disagree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 1 " />
              <label>Strongly disagree</label>
            </li>
          </ul>
          <label class="statement"> I need to have certain possessions or I don’t feel like myself . </label>
          <ul class='likert'>
            <li>
              <input type="checkbox" name="likert" value=" 5 " />
              <label>Strongly agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 4 " />
              <label>Agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 3 " />
              <label>Neutral</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 2 " />
              <label>Disagree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 1 " />
              <label>Strongly disagree</label>
            </li>
          </ul>
          <label class="statement"> Paying the bills is not enough, I want to make new bills! </label>
          <ul class='likert'>
            <li>
              <input type="checkbox" name="likert" value=" 5 " />
              <label>Strongly agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 4 " />
              <label>Agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 3 " />
              <label>Neutral</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 2 " />
              <label>Disagree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 1 " />
              <label>Strongly disagree</label>
            </li>
          </ul>
          <label class="statement"> I love having the latest thing, especially if it is expensive . </label>
          <ul class='likert'>
            <li>
              <input type="checkbox" name="likert" value=" 5 " />
              <label>Strongly agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 4 " />
              <label>Agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 3 " />
              <label>Neutral</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 2 " />
              <label>Disagree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 1 " />
              <label>Strongly disagree</label>
            </li>
          </ul>
          <label class="statement"> You can tell someone’s status by their lifestyle. </label>
          <ul class='likert'>
            <li>
              <input type="checkbox" name="likert" value=" 5 " />
              <label>Strongly agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 4 " />
              <label>Agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 3 " />
              <label>Neutral</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 2 " />
              <label>Disagree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 1 " />
              <label>Strongly disagree</label>
            </li>
          </ul>
        </div>

      <br />
        <div className="physicalNeeds">
        <label class="statement"> If my partner and I are not intimate as often as I prefer, I will find another relationship  </label>
          <ul class='likert'>
            <li>
              <input type="checkbox" name="likert" value=" 5 " />
              <label>Strongly agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 4 " />
              <label>Agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 3 " />
              <label>Neutral</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 2 " />
              <label>Disagree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 1 " />
              <label>Strongly disagree</label>
            </li>
          </ul>
          <label class="statement"> Words are not enough, I need touch . </label>
          <ul class='likert'>
            <li>
              <input type="checkbox" name="likert" value=" 5 " />
              <label>Strongly agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 4 " />
              <label>Agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 3 " />
              <label>Neutral</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 2 " />
              <label>Disagree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 1 " />
              <label>Strongly disagree</label>
            </li>
          </ul>
          <label class="statement"> If our sex life doesn’t do well, the rest of the relationship probably won’t either </label>
          <ul class='likert'>
            <li>
              <input type="checkbox" name="likert" value=" 5 " />
              <label>Strongly agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 4 " />
              <label>Agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 3 " />
              <label>Neutral</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 2 " />
              <label>Disagree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 1 " />
              <label>Strongly disagree</label>
            </li>
          </ul>
          <label class="statement"> I am looking for sex more than a lasting relationship. </label>
          <ul class='likert'>
            <li>
              <input type="checkbox" name="likert" value=" 5 " />
              <label>Strongly agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 4 " />
              <label>Agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 3 " />
              <label>Neutral</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 2 " />
              <label>Disagree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 1 " />
              <label>Strongly disagree</label>
            </li>
          </ul>
          <label class="statement"> I want my partner to want me physically. </label>
          <ul class='likert'>
            <li>
              <input type="checkbox" name="likert" value=" 5 " />
              <label>Strongly agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 4 " />
              <label>Agree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 3 " />
              <label>Neutral</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 2 " />
              <label>Disagree</label>
            </li>
            <li>
              <input type="checkbox" name="likert" value=" 1 " />
              <label>Strongly disagree</label>
            </li>
           </ul>
         </div>
       <div class="buttons">
     <button class="submit">Submit</button>
   </div>
 </form>
</div>

    )
  }
}

export default Test
