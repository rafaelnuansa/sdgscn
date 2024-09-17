<?php

if (! function_exists('flashMessage')) {
    function flashMessage($title, $message, $type = 'success', $position = 'bottom-right'): void
    {
        session()->flash('title', $title);
        session()->flash('message', $message);
        session()->flash('type', $type);
        session()->flash('position', $position);
    }
}
