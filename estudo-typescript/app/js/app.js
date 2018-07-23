const negociacaoCtrl = new NegociacaoController();
$(".form").submit(negociacaoCtrl.adicionar.bind(negociacaoCtrl));
