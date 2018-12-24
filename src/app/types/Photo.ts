export type Tone = 'warm' | 'cool' | 'bw' | 'contrast' | 'saturate' | 'film' | 'street';

export type Mood = 'happy' | 'sad' | 'rainy' | 'lonely' | 'snowy' |'cloudy';

export interface DetailPhotoParams {
    photo: string;
}

export type Time = 'day' | 'night';
export interface DetailPhoto {
    id: string;
    extension: 'jpg'|'jpeg'|'png';
    photographer: Photographer;
    tone: Tone[];
    type: 'Portrait' | 'Landscape';
    mood: Mood[];
    time: Time;
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
