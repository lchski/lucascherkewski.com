<?php


namespace Lchski\Twig\Markdown;


use League\CommonMark\Inline\Element\Link;
use League\CommonMark\Inline\Parser\AbstractInlineParser;
use League\CommonMark\InlineParserContext;

class TwitterHandleParser extends AbstractInlineParser
{
    /**
     * Target "t@" as the identifier for a Twitter handle.
     *
     * @return array
     */
    public function getCharacters()
    {
        return ['t@'];
    }

    public function parse(InlineParserContext $inlineContext)
    {
        $cursor = $inlineContext->getCursor();

        // Check for characters immediately prior to identifier
        $previousChar = $cursor->peek(-1);
        if ($previousChar !== null && $previousChar !== ' ') {
            return false;
        }

        // Save cursor state in case we need to rewind
        $previousState = $cursor->saveState();

        // Advance past the t@ identifier to keep parsing simpler
        $cursor->advanceBy(2);

        $handle = $cursor->match('/^[A-Za-z0-9_]{1,15}(?!\w)/');
        if (empty($handle)) {
            $cursor->restoreState($previousState);
            return false;
        }

        $profileUrl = 'https://twitter.com/' . $handle;
        $inlineContext->getContainer()->appendChild(new Link($profileUrl, '@' . $handle));
        return true;
    }
}
