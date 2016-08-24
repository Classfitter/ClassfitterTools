import setGutHubDeploymentStatus  from "./setGitHubDeploymentStatus";

export default function setGitHubDeploymentStatusWthPayload(payloadString: string, state: string, description: string){
    let payload: GitHubDeployment.Payload = JSON.parse(process.env.payload);
    let deployment = payload.deployment;
    let repository = payload.repository;
    console.log("Deploying " + deployment.sha + " from " + payload.deployment.ref
        + " into " + payload.deployment.environment + " environment for " + deployment.creator.login);
    return setGutHubDeploymentStatus(repository.owner.login, repository.name, deployment.id, state, description);
}
declare module GitHubDeployment {

    export interface Creator {
        login: string;
        id: number;
        avatar_url: string;
        gravatar_id: string;
        url: string;
        html_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string;
        type: string;
        site_admin: boolean;
    }

    export interface Deployment {
        url: string;
        id: number;
        sha: string;
        ref: string;
        task: string;
        payload: string;
        environment: string;
        description: string;
        creator: Creator;
        created_at: Date;
        updated_at: Date;
        statuses_url: string;
        repository_url: string;
    }

    export interface Owner {
        login: string;
        id: number;
        avatar_url: string;
        gravatar_id: string;
        url: string;
        html_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string;
        type: string;
        site_admin: boolean;
    }

    export interface Repository {
        id: number;
        name: string;
        full_name: string;
        owner: Owner;
        private: boolean;
        html_url: string;
        description: string;
        fork: boolean;
        url: string;
        forks_url: string;
        keys_url: string;
        collaborators_url: string;
        teams_url: string;
        hooks_url: string;
        issue_events_url: string;
        events_url: string;
        assignees_url: string;
        branches_url: string;
        tags_url: string;
        blobs_url: string;
        git_tags_url: string;
        git_refs_url: string;
        trees_url: string;
        statuses_url: string;
        languages_url: string;
        stargazers_url: string;
        contributors_url: string;
        subscribers_url: string;
        subscription_url: string;
        commits_url: string;
        git_commits_url: string;
        comments_url: string;
        issue_comment_url: string;
        contents_url: string;
        compare_url: string;
        merges_url: string;
        archive_url: string;
        downloads_url: string;
        issues_url: string;
        pulls_url: string;
        milestones_url: string;
        notifications_url: string;
        labels_url: string;
        releases_url: string;
        deployments_url: string;
        created_at: Date;
        updated_at: Date;
        pushed_at: Date;
        git_url: string;
        ssh_url: string;
        clone_url: string;
        svn_url: string;
        homepage?: any;
        size: number;
        stargazers_count: number;
        watchers_count: number;
        language: string;
        has_issues: boolean;
        has_downloads: boolean;
        has_wiki: boolean;
        has_pages: boolean;
        forks_count: number;
        mirror_url?: any;
        open_issues_count: number;
        forks: number;
        open_issues: number;
        watchers: number;
        default_branch: string;
    }

    export interface Organization {
        login: string;
        id: number;
        url: string;
        repos_url: string;
        events_url: string;
        hooks_url: string;
        issues_url: string;
        members_url: string;
        public_members_url: string;
        avatar_url: string;
        description?: any;
    }

    export interface Sender {
        login: string;
        id: number;
        avatar_url: string;
        gravatar_id: string;
        url: string;
        html_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string;
        type: string;
        site_admin: boolean;
    }

    export interface Payload {
        deployment: Deployment;
        repository: Repository;
        organization: Organization;
        sender: Sender;
    }

}