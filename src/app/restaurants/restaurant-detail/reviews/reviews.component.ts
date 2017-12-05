import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, Route} from '@angular/router';
import {RestaurantsService} from "../../restaurants.service";

@Component({
    selector: 'mt-reviews',
    templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

    reviews: Observable<any>;

    constructor(private restaurantsService: RestaurantsService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.reviews = this.restaurantsService
            .reviewsById(this.route.parent.snapshot.params['id']);
    }

}
