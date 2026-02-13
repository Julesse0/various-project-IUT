<?php

namespace App\Entity;

use App\Repository\QuestionRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: QuestionRepository::class)]
class Question
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $QuestionStr = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $type = null;

    #[ORM\ManyToOne(targetEntity: QCM::class, inversedBy: 'questions')]
    #[ORM\JoinColumn(nullable: false)]
    private ?QCM $qcm = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getQuestionStr(): ?string
    {
        return $this->QuestionStr;
    }

    public function setQuestionStr(string $QuestionStr): static
    {
        $this->QuestionStr = $QuestionStr;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(?string $type): static
    {
        $this->type = $type;

        return $this;
    }

    public function getQcm(): ?QCM
    {
        return $this->qcm;
    }

    public function setQcm(?QCM $qcm): static
    {
        $this->qcm = $qcm;

        return $this;
    }
}