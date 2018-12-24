export type Tone = 'warm' | 'cool';

export type Mood = 'happy' | 'sad' | 'rainy';

export interface DetailPhotoParams {
    photo: string;
}

export interface DetailPhoto {
    id: string;
    extension: 'jpg'|'jpeg'|'png';
    photographer: Photographer;
    tone: Tone[];
    type: 'Portrait' | 'Landscape';
    mood: Mood[];
    setting: Setting;
    like: number;
    view: number;
}

export interface Photographer {
    id: string;
    firstname: string;
    lastname: string;
    from?: string;
}

export interface Setting {
    iso: string;
    f: string;
    ss: string;
    wb: string;
    focal: string;
}
