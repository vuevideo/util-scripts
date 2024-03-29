import axios from 'axios';

const createDummyUser = async () => {
  await axios.post(
    `${process.env.BACKEND_URL}/api/v1/auth`,
    {
      emailAddress: 'already@used.com',
      username: 'alreadyUsed',
      password: 'testtest',
      name: 'testtest',
    },
    {
      'Content-Type': 'application/json',
    }
  );

  await axios.post(
    `${process.env.BACKEND_URL}/api/v1/auth`,
    {
      emailAddress: 'already+test@used.com',
      username: 'alreadyUsedtest',
      password: 'testtest',
      name: 'testtest',
    },
    {
      'Content-Type': 'application/json',
    }
  );
};

const main = () => {
  createDummyUser()
    .then(() => console.log('Dummy users created'))
    .finally(() => console.log('Script End'));
};

main();
