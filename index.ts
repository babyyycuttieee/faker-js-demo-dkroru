// Import stylesheets
import './styles.css';

import { faker } from '@faker-js/faker';
import faker_zh_CN from '@faker-js/faker/locale/zh_CN';

const fullName = `${faker.name.firstName()} ${faker.name.lastName()}`;
const avatarUrl = faker.image.avatar();
const natureImageUrl = faker.image.nature();
const address = faker.address.city();

const zh_CN_fullName = `${faker_zh_CN.name.firstName()} ${faker_zh_CN.name.lastName()}`;

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Faker Demo</h1>
<br>
<b>Name:</b> ${fullName} <br>
<b>City:</b>${address}<br>
<b>Avatar URL:</b>${avatarUrl}
<div class="card">
  <div class="card__image">
    <img src="${natureImageUrl}" alt="Background image for ${fullName}"/>
  </div>
  <div class="card__profile">
    <img src="${avatarUrl}" alt="Avatar image of ${fullName}"/>
  </div>
  <div class="card__body">
  <b>Name:</b> ${fullName} <br>
  <b>City:</b>${address}<br>
  <b>zh_CN Name:</b> ${zh_CN_fullName}
  </div>  
</div>
`;
