<?php


namespace Lchski\Twig\Markdown;


use League\CommonMark\Block\Element\Document;
use League\CommonMark\DocumentProcessorInterface;
use League\CommonMark\Inline\Element\Link;

class LinkProcessor implements DocumentProcessorInterface
{
    /**
     * @param Document $document
     *
     * @return void
     */
    public function processDocument(Document $document)
    {
        $walker = $document->walker();

        while($event = $walker->next()) {
            $node = $event->getNode();

            // Only process Link nodes when we first encounter them
            if (!($node instanceof Link) || !$event->isEntering()) {
                continue;
            }

            $node->data['attributes']['class'] = 'black-70 dim';
        }
    }
}
