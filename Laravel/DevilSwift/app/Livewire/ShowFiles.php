<?php

namespace App\Livewire;

use App\Models\File;
use App\Models\User;
use Livewire\Component;
use Livewire\WithPagination;

class ShowFiles extends Component
{
    use WithPagination;

    public $search = '';


    public function render()
    {
        // if($this->search == ""){
        //     $files = File::where('name', 'like' , "%".$this->search."%")->paginate(10);
        // }
        // else{
        $files = File::where('name', 'like' , "%".$this->search."%")->paginate(10);
        // }
        return view('livewire.show-files', [
            'files' => $files
        ]);
    }
}
