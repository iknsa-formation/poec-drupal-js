<?php 
error_reporting(1);
include_once 'dbConnect.php';

switch ($_REQUEST ['method']) {
	case 'getAuthors':
		$res = $pdo->prepare('SELECT * FROM auteur ORDER BY nom, prenom, fonction');
		$res->execute();
		$res = $res->fetchAll(PDO::FETCH_ASSOC);
		break;
	case 'getAuthorById':
		$res = $pdo->prepare('SELECT * FROM auteur WHERE id_auteur = ?');
		$res->execute(array($_REQUEST['id_auteur']));
		$res = $res->fetchAll(PDO::FETCH_ASSOC);
		break;
	case 'addAuthor':
		$res = $pdo->prepare('INSERT INTO auteur (nom, prenom, fonction) VALUES (?, ?, ?)');
		$res->execute(array($_REQUEST['nom'], $_REQUEST['prenom'], $_REQUEST['fonction']));
		$res = true;
		break;
	case 'deleteAuthor': 
		$res = $pdo->prepare('DELETE FROM auteur WHERE id_auteur = ?');
		$res->execute(array($_REQUEST['id_auteur']));
		$res = true;
		break;
	case 'editAuthor':
		$res = $pdo->prepare('UPDATE auteur SET nom = ?, prenom = ?, fonction = ? WHERE id_auteur = ?');
		$res->execute(array($_REQUEST['nom'], $_REQUEST['prenom'], $_REQUEST['fonction'], $_REQUEST['id_auteur']));
		$res = true;
		break;
	default:
		break;
}
echo json_encode($res);