<div class="container">
    <div class="row">
        <div class="col">
            <h4>PORSCHExperience</h4>
            <ul>
                <li><a href="{{ ( $isHome ) ? '#intro' : '/' }}">Home</a></li>
                @foreach ($categories as $category)
                <?php $nameLowerCase = strtolower($category->name); ?>
                    <li><a href="/models/{{ $nameLowerCase }}">{{$category->name}}</a></li>
                @endforeach
                <li><a href="/gallery">Gallery</a></li>
            </ul>
        </div>
        <div class="col">
            <h4>Official Social Media</h4>
            <ul>
                <li><a class="fb" href="https://www.facebook.com/porsche/" target="_blank">Facebook</a></li>
                <li><a class="yt" href="http://www.youtube.com/user/Porsche" target="_blank">Youtube</a></li>
                <li><a class="tw" href="https://twitter.com/Porsche" target="_blank">Twitter</a></li>
                <li><a class="pi" href="http://www.pinterest.com/porsche/" target="_blank">Pinterest</a></li>
                <li><a class="ig" href="https://www.instagram.com/porschebelgium/" target="_blank">Instagram</a></li>
                <li><a class="li" href="https://www.linkedin.com/company/porsche-belgium/" target="_blank">Linkedin</a></li>
            </ul>
        </div>
        <div class="col">
            <h4>About Me</h4>
            <ul>
                <li><a href="https://github.com/andrerobbe" target="_blank">GitHub Repository</a></li>
                <li><a href="mailto:andre.robbe@student.kdg.be?subject=PORSCHExperience&body=Hello,">Email Me</a></li>
            </ul>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <p>&copy; PORSCHExperience 2019</p>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <p>PORSCHExperience is a fansite, created for a school project and is not part of Porsche. Any data found on this website is without prejudice. Most images originate from the official Porsche site.</p>
        </div>
    </div>
</div>