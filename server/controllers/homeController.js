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
  res.render('index', viewModel);
};

export default {
  // Action Methods
  index, // el index es un metodo de homeController
};
