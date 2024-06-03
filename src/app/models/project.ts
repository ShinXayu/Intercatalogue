export class Project
{
    title: string;
    description: string;
    createdDate: Date;
    creator: string;
    tags: string[];
    id: string;
    url: string;
    contactEmail: string;

    constructor(title: string, description: string, createdDate: Date, creator: string, tags: string[], url: string, email : string)
    {
        this.id = crypto.randomUUID().substring(0, 8);
        this.title = title
        this.description = description
        this.createdDate = createdDate
        this.creator = creator
        this.tags = tags
        this.url = url
        this.contactEmail = email
    }


}