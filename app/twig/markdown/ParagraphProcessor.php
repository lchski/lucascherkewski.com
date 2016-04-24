<?php


namespace Lchski\Twig\Markdown;


use League\CommonMark\Block\Element\Document;
use League\CommonMark\Block\Element\Paragraph;
use League\CommonMark\DocumentProcessorInterface;
use League\CommonMark\Util\Configuration;
use League\CommonMark\Util\ConfigurationAwareInterface;

class ParagraphProcessor implements DocumentProcessorInterface, ConfigurationAwareInterface
{
    private $config;

    public function setConfiguration(Configuration $configuration)
    {
        $this->config = $configuration;
    }

    public function processDocument(Document $document)
    {
        $walker = $document->walker();

        while($event = $walker->next()) {
            $node = $event->getNode();

            if (!($node instanceof Paragraph) || !$event->isEntering()) {
                continue;
            }

            $node->data['attributes']['class'] = 'measure lh-copy';
        }
    }
}
