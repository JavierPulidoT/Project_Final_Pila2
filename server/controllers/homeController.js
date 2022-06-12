// URL: GET /
const index = (req, res) => {
  // calculando emojie
  const emojieDataset = ['💻', '🔍', '💰', '💳', '💸'];

  const emojie =
    emojieDataset[Math.floor(Math.random() * emojieDataset.length)];
  // view-Models
  const viewModel = {
    title: 'Project Wallet',
    author: '🙍‍♂️Javier Pulido',
    emojie,
  };
  res.render('home/indexView', viewModel);
};

// URL: Get /about
const about = (req, res) => {
  res.render('home/aboutView', {
    name: 'Javier Pulido',
    email: 'javierp.pulido@gmail.com',
    url: 'https://github.com/JavierPulidoT',
  });
};

export default {
  // Action Methods
  index,
  about,
};
