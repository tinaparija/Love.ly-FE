import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Options from './options';

class Test extends Component{
  render(){
    return (
      <div class="wrap">
      <h1 class="likert-header"></h1>
      <form action="">

        <div className="humorTest">
          <div className="humorQuestion1">
          <label class="statement"> A sense of humor is a must . </label>
          <Options />
          </div>

        <div className="humorQuestion2">
          <label class="statement"> Laughter is the best medicine. </label>
          <Options />
        </div>

        <div className="humorQuestion3">
          <label class="statement"> I want to date someone that knows how to make me laugh. </label>
        <Options />
        </div>

       <div className="humorQuestion4">
          <label class="statement"> I’m funny, and I like funny people . </label>
        <Options />
        </div>

        <div className="humorQuestion5">
          <label class="statement"> Its always a good time for a joke  . </label>
        <Options />
        </div>
      </div>

      <br />

        <div className="intellegenceTest">
         <div className="intellegenceQuestion1">
          <label class="statement"> I want to date a smart person. </label>
          <Options />
        </div>
      </div>

      <div className="intellegenceQuestion2">
           <label class="statement"> A beautiful mind is a terrible thing to waste . </label>
            <Options />
        </div>

      <div className="intellegenceQuestion3">
          <label class="statement"> Intelligence is a value resource to society. </label>
            <Options />
        </div>

        <div className="intellegenceQuestion4">
          <label class="statement"> I find smart people attractive . </label>
          <Options />
      </div>

      <div className="intellegenceQuestion5">
        <label class="statement"> Intelligent conversation draws me to want to get to know someone more. </label>
        <Options />
    </div>

      <br />

        <div className="Empathy">
        <div className="empathyQuestion1">
          <label class="statement"> People’s feelings matter. </label>
          <Options />
        </div>

        <div className="empathyQuestion2">
          <label class="statement"> Sometimes doing good for others is worth it even if you lose out because of it . </label>
          <Options />
        </div>

        <div className="empathyQuestion3">
          <label class="statement"> When I see people less fortunate, it makes me sad . </label>
          <Options />
        </div>

        <div className="empathyQuestion4">
          <label class="statement"> I want to help the world . </label>
          <Options />
        </div>

        <div className="empathyQuestion5">
          <label class="statement"> I can’t stand to see suffering. </label>
          <Options />
        </div>
      </div>

          <br />

        <div className="materialistic">
         <div className="materialisticQuestion1">
          <label class="statement"> Life is greatly enhanced by the comforts that money can buy . </label>
          <Options />
        </div>

        <div className="materialisticQuestion2">
          <label class="statement"> I need to have certain possessions or I don’t feel like myself . </label>
          <Options />
        </div>

        <div className="materialisticQuestion3">
          <label class="statement"> Paying the bills is not enough, I want to make new bills! </label>
          <Options />
        </div>

        <div className="materialisticQuestion4">
          <label class="statement"> I love having the latest thing, especially if it is expensive . </label>
          <Options />
        </div>

        <div className="materialisticQuestion5">
          <label class="statement"> You can tell someone’s status by their lifestyle. </label>
          <Options />
        </div>
        </div>

      <br />

        <div className="physicalNeeds">
          <div className="physicalNeedsQuestion1">
        <label class="statement"> If my partner and I are not intimate as often as I prefer, I will find another relationship  </label>
        <Options />
      </div>

      <div className="physicalNeedsQuestion2">
          <label class="statement"> Words are not enough, I need touch . </label>
          <Options />
        </div>

        <div className="physicalNeedsQuestion3">
          <label class="statement"> If our sex life doesn’t do well, the rest of the relationship probably won’t either </label>
          <Options />
        </div>

        <div className="physicalNeedsQuestion4">
          <label class="statement"> I am looking for sex more than a lasting relationship. </label>
          <Options />
        </div>

        <div className="physicalNeedsQuestion5">
          <label class="statement"> I want my partner to want me physically. </label>
          <Options />
        </div>
        </div>
       <div class="buttons">
         <button onClick={e => this.onSubmit(e)}>Submit</button>
   </div>
 </form>
</div>

    )
  }
}

export default Test
