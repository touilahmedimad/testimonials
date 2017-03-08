<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class TestimonialsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       $testimonials = factory(App\Testimonial::class,20)->create();
    }
}



