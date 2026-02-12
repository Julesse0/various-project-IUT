<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class BaseController extends AbstractController
{
    #[Route('/Base', name: 'app_base')]
    public function index(): Response
    {
        return $this->render('base/index.html.twig', [
            'controller_name' => 'BaseController',
        ]);
    }

    #[Route('/Julesse', name: 'app_julesse')]
    public function julesse(): Response
    {
        return $this->render('julesse.html.twig', [
            'controller_name' => 'BaseController',
            'page_name' => 'Julesse'
        ]);
    }
}