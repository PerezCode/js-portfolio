import getData from "@utils/getData.js";
import gitHubLogo from "@images/github.svg";
import linkedInLogo from "@images/linkedIn.svg";
import twitterLogo from "@images/twitter.svg";

const Template = async () => {
  const data = await getData();
  const view = `
    <div class="About">
      <div class="card">
        <div class="card_photo">
          <img src="${data.picture.large}" alt="${data.name.first}">
        </div>
        <p class="card_title">Hi, My name is</p>
        <p class="card_value">${data.name.first} ${data.name.last}</p>
        <div class="card_userdata">
          <ul>
            <li>${data.location.country}</li>
            <li>·</li>
            <li>${data.dob.age} years old</li>
          </ul>
        </div>
        <div class="card_social">
          <a href="https://twitter.com/perezcode">
            <img src="${twitterLogo}" />
          </a>
          <a href="https://github.com/perezcode">
            <img src="${gitHubLogo}" />
          </a>
          <a href="https://linkedin.com/in/perezcode/">
            <img src="${linkedInLogo}" />
          </a>
        </div>
      </div>
      <button class="load-new-user">Get new random user</button>
    </div>
  `;

  return view;
};

export default Template;
