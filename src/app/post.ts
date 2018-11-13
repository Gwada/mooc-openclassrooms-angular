export class Post {
    private title: string;
    private content: string;
    private loveIts: number;
    private created_at: Date;

    constructor(title: string, content: string) {
        this.setTitle(title);
        this.setContent(content);
        this.setLoveIts();
        this.setCreatedAt();
    }

    getTitle() {
        return this.title;
    }

    setTitle(title: string) {
        this.title = title;
    }

    getContent() {
        return this.content;
    }

    setContent(content: string) {
        this.content = content;
    }

    getLoveIts() {
        return this.loveIts;
    }

    setLoveIts() {
        this.loveIts = 0;
    }

    addLoveIts() {
        ++this.loveIts;
    }

    removeLoveIts() {
        --this.loveIts;
    }

    getCreatedAt() {
        return this.created_at;
    }

    setCreatedAt() {
        this.created_at = new Date();
    }
}
