import Controller from '@ember/controller';
import { computed } from "@ember/object";

export default Controller.extend({
    hasStars: false,
    openIssues: false,

    filteredRepos: computed('model.length', 'searchText', 'hasStars', function() {
        let model = this.get('model');
        let searchText = this.get('searchText');
        let regex = new RegExp(searchText, 'i');

        if (searchText) {
            return model.filter( function(repo) {
                return repo.language.match(regex) || repo.name.match(regex);
            })
        }
        
        if (this.get('hasStars') === true) {
            return model.filter( function(repo) {
                return (repo.stargazers_count >= 1);
            })
        }

        if (this.get('openIssues') === true) {
            return model.filter( function(repo) {
                return (repo.open_issues_count >= 1);
            })
        } else {
            return model.sort();
        }
    })
});
