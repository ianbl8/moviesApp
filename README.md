
# Full Stack Development 2 - Assignment

__Name:__ Ian Blake

## Features added

+ List view for TV shows
+ Detail view for TV shows
+ List view for Favourite TV Shows
+ Detail view for actors
+ Hyperlinking between actors, movies and TV shows
+ Add New Movie feature
+ Displaying added reviews for movies and TV shows alongside excerpts
+ Pagination for movies and TV shows
+ Storybook support for TV show pages

## Feature Design

#### List view for TV shows

> This view lists TV shows from the `discover/tv` endpoint. (Most shows appearing on page 1 are not English-language shows.) TV shows can be set as favourites and/or must watch shows, with icons displayed as appropriate.

![][image01]

#### Detail view for TV shows

> This detail view displays the show overview, genres, running time, first and last air dates, rating and production countries. This view also shows the cast and crew for the TV show.

![][image02]

> As with the movie view, multiple posters are shown where available. Where a cast member has played multiple roles in a TV show, these are also shown.

![][image03]

#### List view for favourite TV shows

> This list view displays favourite TV shows, and as with favourite movies, users can write their own reviews.

![][image04]

#### Detail view for actors

> This detail view uses data from the `person` endpoint to display an actor's dates of birth and death (where recorded), as well as their biography. Chips displaying their movies and TV shows link to those records.

![][image05]

#### Hyperlinking between actors, movies and TV shows

> All movie titles and TV show names are hyperlinked, as well as actor names, within their respective pages. For example, you can go from *Murder, She Wrote* to **Angela Lansbury** and on to *The Manchurian Candidate* by following the hyperlinks.

![][image06]

> Movie titles and TV show names are also hyperlinks in their respective cards.

![][image07]

#### Add New Movie feature

> A basic implementation to allow creation of a fantasy movie, storing the title, overview, genre, release date and runtime for a movie.

![][image08]

> The genre is chosen from a dropdown list of all available movie genres, and the release date is selected from a date picker. When stored, the release date is not stored as a date object, but is converted into plain text in the YYYY-MM-DD format as with the original records.

![][image09]
![][image10]

#### Displaying added reviews for movies and TV shows alongside excerpts

> Reviews can be added for both movies and TV shows, and and reviews added are displayed at the top of the movie review excerpt list. The rating is displayed out of five stars.

![][image11]
![][image12]

#### Pagination for movies and TV shows

> The movies and TV show list views are both paginated, as well as the upcoming movies list view. These use page-based queries and cache each response separately

![][image13]
![][image14]

## Storybook

> Storybook was used when creating TV show pages and making improvements to movie pages. The stories below were added, and *Murder, She Wrote* was used as a sample TV show.

+ `filterTVShowsCard`
+ `tvShowCard`
+ `tvShowDetails`
+ `tvShowHeader`
+ `tvShowList`
+ `tvShowsHeader`

![][image15]
![][image16]
![][image17]

## Deployment

The site is currently deployed on Netlify at https://ianbl8-moviesapp.netlify.app. As I did not implement authentication, a username or password is not required.

![][image18]

## Additional Information

The `MoviesContext` was extended and the `TVShowsContext` was created to allow for data to be stored in relation to favourite/must watch movies and TV shows, reviews for movies and TV shows, and new movies.

A number of the components and functions were renamed from the original app created in the labs, in order to clarify the connections between the different components. 

[image01]: ./screenshots/image01.png
[image02]: ./screenshots/image02.png
[image03]: ./screenshots/image03.png
[image04]: ./screenshots/image04.png
[image05]: ./screenshots/image05.png
[image06]: ./screenshots/image06.png
[image07]: ./screenshots/image07.png
[image08]: ./screenshots/image08.png
[image09]: ./screenshots/image09.png
[image10]: ./screenshots/image10.png
[image11]: ./screenshots/image11.png
[image12]: ./screenshots/image12.png
[image13]: ./screenshots/image13.png
[image14]: ./screenshots/image14.png
[image15]: ./screenshots/image15.png
[image16]: ./screenshots/image16.png
[image17]: ./screenshots/image17.png
[image18]: ./screenshots/image18.png
