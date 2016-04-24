<?php


namespace Lchski\Twig\Markdown;


use League\CommonMark\Block\Element\Document;
use League\CommonMark\Block\Element\ThematicBreak;
use League\CommonMark\DocumentProcessorInterface;

class ThematicBreakProcessor implements DocumentProcessorInterface
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
            if (!($node instanceof ThematicBreak) || !$event->isEntering()) {
                continue;
            }

            $node->data['attributes']['class'] = 'ba b--light-gray ma5';
        }
    }
}
