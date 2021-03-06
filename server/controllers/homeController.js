// URL: GET /
const index = (req, res) => {
  // calculando emojie
  const emojieDataset = ['π»', 'π', 'π°', 'π³', 'πΈ'];

  const emojie =
    emojieDataset[Math.floor(Math.random() * emojieDataset.length)];
  // view-Models
  const viewModel = {
    title: 'Project Wallet',
    author: 'πββοΈJavier Pulido',
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
    description:
      'Aplicacion que te permite registrar y apuntar Cryptos en tu Wallet',
    version: '0.0.alpha',
  });
};

export default {
  // Action Methods
  index,
  about,
};
