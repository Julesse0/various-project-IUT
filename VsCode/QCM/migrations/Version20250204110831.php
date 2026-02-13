<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250204110831 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE question (id INT AUTO_INCREMENT NOT NULL, qcm_id INT NOT NULL, question_str VARCHAR(255) NOT NULL, type VARCHAR(255) DEFAULT NULL, INDEX IDX_B6F7494EFF6241A6 (qcm_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE question ADD CONSTRAINT FK_B6F7494EFF6241A6 FOREIGN KEY (qcm_id) REFERENCES qcm (id)');
        $this->addSql('ALTER TABLE qcm ADD theme VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE question DROP FOREIGN KEY FK_B6F7494EFF6241A6');
        $this->addSql('DROP TABLE question');
        $this->addSql('ALTER TABLE qcm DROP theme');
    }
}
