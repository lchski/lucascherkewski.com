<?php


namespace Lchski\Twig\Markdown;


use League\CommonMark\Block\Element\Document;
use League\CommonMark\Block\Element\Paragraph;
use League\CommonMark\DocumentProcessorInterface;

class ParagraphProcessor implements DocumentProcessorInterface
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

            // Only process Paragraph nodes when we first encounter them
            if (!($node instanceof Paragraph) || !$event->isEntering()) {
                continue;
            }

            $node->data['attributes']['class'] = 'measure lh-copy';
        }
    }
}
