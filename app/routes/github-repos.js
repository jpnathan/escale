import Route from '@ember/routing/route';
import { inject } from "@ember/service";

export default Route.extend({
    ajax: inject(),

    model() {
        return this.get('ajax').request('https://api.github.com/users/wilfernandesjr/repos').then(repos => {
            return repos;
        })
    }
 });
