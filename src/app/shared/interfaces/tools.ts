export class Tool {    
    private title: string;
    private link: string;
    private description: string;
    private tags: string[];
    private id: number;
    
    constructor(        
        title: string,
        link: string,
        description: string,
        tags: string[],
        id?: number
        ){
            this.title = title;
            this.link = link;
            this.description = description;
            this.tags = tags;
            this.id = id;
        }

    get getId(): number {
        return this.id;
    }

    set setId(newId) {
        this.id = newId;
    }

    get getTitle(): string {
    return this.title;
    }

    get getLink(): string {
        return this.link;
    }

    get getDescription(): string {
    return this.description;
    }

    get getTags(): string[] {
        return this.tags;
    }
}