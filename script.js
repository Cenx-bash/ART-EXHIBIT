const _0x3d4a = ['getElementById', 'querySelector', 'querySelectorAll', 'addEventListener', 'classList', 'toggle', 'remove', 'add', 'contains', 'dataset', 'filter', 'style', 'display', 'opacity', 'transform', 'translateY', 'setTimeout', 'innerHTML', 'createElement', 'setAttribute', 'appendChild', 'click', 'scrollIntoView', 'behavior', 'smooth', 'block', 'center', 'scale', 'boxShadow', 'animationPlayState', 'paused', 'scrollLeft', 'getComputedStyle', 'transform', 'split', 'translateX', 'running', 'textContent', 'getAttribute', 'setAttribute', 'localStorage', 'getItem', 'setItem'];
(function(_0x4e3d8c, _0x3d4a21) {
    const _0x5e7c3e = function(_0x2b86d8) {
        while (--_0x2b86d8) {
            _0x4e3d8c['push'](_0x4e3d8c['shift']());
        }
    };
    _0x5e7c3e(++_0x3d4a21);
}(_0x3d4a, 0x11f));
const _0x5e7c = function(_0x4e3d8c, _0x3d4a21) {
    _0x4e3d8c = _0x4e3d8c - 0x0;
    let _0x5e7c3e = _0x3d4a[_0x4e3d8c];
    return _0x5e7c3e;
};
const _0x2c62e8 = document[_0x5e7c('0x0')]('themeToggle');
const _0x2c62e9 = document[_0x5e7c('0x0')]('menuToggle');
const _0x2c62ea = document[_0x5e7c('0x1')]('.nav-menu');
const _0x2c62eb = document[_0x5e7c('0x2')]('.filter-btn');
const _0x2c62ec = document[_0x5e7c('0x0')]('artworksScrollTrack');
const _0x2c62ed = document[_0x5e7c('0x0')]('artistsScrollTrack');
const _0x2c62ee = document[_0x5e7c('0x0')]('galleryScrollTrack');
const _0x2c62ef = document[_0x5e7c('0x0')]('artworkModal');
const _0x2c62f0 = document[_0x5e7c('0x1')]('.close-modal');
const _0x2c62f1 = document[_0x5e7c('0x0')]('loadingScreen');
const _0x2c62f2 = document[_0x5e7c('0x0')]('exploreGallery');
const _0x2c62f3 = document[_0x5e7c('0x0')]('viewExhibitions');
const _0x2c62f4 = document[_0x5e7c('0x0')]('scrollLeft');
const _0x2c62f5 = document[_0x5e7c('0x0')]('scrollRight');
const _0x2c62f6 = document[_0x5e7c('0x0')]('galleryScrollLeft');
const _0x2c62f7 = document[_0x5e7c('0x0')]('galleryScrollRight');
const _0x2c62f8 = [{
    'id': 0x1,
    'title': 'Ethereal\x20Landscape',
    'artist': 'Sarah\x20Chen',
    'artistId': 0x1,
    'category': 'visual',
    'medium': 'Oil\x20on\x20Canvas',
    'description': 'A\x20dreamlike\x20interpretation\x20of\x20mountain\x20landscapes,\x20blending\x20traditional\x20techniques\x20with\x20contemporary\x20color\x20theory.\x20The\x20piece\x20explores\x20the\x20relationship\x20between\x20memory\x20and\x20place.',
    'dimensions': '120\x20×\x2090\x20cm',
    'year': '2023',
    'price': '$8,500'
}, {
    'id': 0x2,
    'title': 'Urban\x20Symphony',
    'artist': 'Marcus\x20Rodriguez',
    'artistId': 0x2,
    'category': 'visual',
    'medium': 'Mixed\x20Media',
    'description': 'Collage\x20and\x20acrylic\x20work\x20capturing\x20the\x20rhythm\x20and\x20energy\x20of\x20city\x20life\x20through\x20geometric\x20abstraction\x20and\x20found\x20materials.',
    'dimensions': '100\x20×\x20150\x20cm',
    'year': '2023',
    'price': '$6,200'
}, {
    'id': 0x3,
    'title': 'Silent\x20Conversations',
    'artist': 'Aisha\x20Patel',
    'artistId': 0x3,
    'category': 'visual',
    'medium': 'Watercolor',
    'description': 'Delicate\x20watercolor\x20series\x20exploring\x20non-verbal\x20communication\x20and\x20emotional\x20connections\x20through\x20subtle\x20color\x20gradients.',
    'dimensions': '60\x20×\x2045\x20cm',
    'year': '2023',
    'price': '$3,800'
}, {
    'id': 0x4,
    'title': 'Whispers\x20of\x20the\x20Forest',
    'artist': 'Eleanor\x20Vance',
    'artistId': 0x4,
    'category': 'literary',
    'medium': 'Poetry\x20Collection',
    'description': 'A\x20chapbook\x20of\x20nature-inspired\x20poetry\x20that\x20explores\x20themes\x20of\x20growth,\x20decay,\x20and\x20renewal\x20through\x20seasonal\x20metaphors.',
    'dimensions': '48\x20pages',
    'year': '2023',
    'price': '$25'
}, {
    'id': 0x5,
    'title': 'Metropolis\x20Dreams',
    'artist': 'James\x20Fitzgerald',
    'artistId': 0x5,
    'category': 'literary',
    'medium': 'Short\x20Stories',
    'description': 'Collection\x20of\x20interconnected\x20stories\x20about\x20urban\x20life,\x20technology,\x20and\x20human\x20connection\x20in\x20the\x20digital\x20age.',
    'dimensions': '192\x20pages',
    'year': '2023',
    'price': '$18'
}, {
    'id': 0x6,
    'title': 'Ceramic\x20Vessels',
    'artist': 'Lena\x20Petrov',
    'artistId': 0x6,
    'category': 'applied',
    'medium': 'Stoneware',
    'description': 'Hand-thrown\x20ceramic\x20vessels\x20with\x20intricate\x20glaze\x20patterns\x20inspired\x20by\x20traditional\x20folk\x20art\x20and\x20modern\x20minimalism.',
    'dimensions': 'Various\x20sizes',
    'year': '2023',
    'price': '$450-900'
}, {
    'id': 0x7,
    'title': 'Woven\x20Memories',
    'artist': 'Isabella\x20Garcia',
    'artistId': 0x7,
    'category': 'applied',
    'medium': 'Textile\x20Art',
    'description': 'Handwoven\x20tapestries\x20incorporating\x20natural\x20dyes\x20and\x20traditional\x20weaving\x20techniques\x20with\x20contemporary\x20designs.',
    'dimensions': '200\x20×\x20150\x20cm',
    'year': '2023',
    'price': '$2,800'
}, {
    'id': 0x8,
    'title': 'Kinetic\x20Sculpture',
    'artist': 'David\x20Kim',
    'artistId': 0x8,
    'category': 'applied',
    'medium': 'Brass\x20&\x20Steel',
    'description': 'Interactive\x20kinetic\x20sculpture\x20that\x20responds\x20to\x20ambient\x20light\x20and\x20movement,\x20creating\x20ever-changing\x20shadow\x20patterns.',
    'dimensions': '60\x20×\x2060\x20×\x20120\x20cm',
    'year': '2023',
    'price': '$12,000'
}, {
    'id': 0x9,
    'title': 'Dance\x20of\x20the\x20Elements',
    'artist': 'Maya\x20Collective',
    'artistId': 0x9,
    'category': 'performance',
    'medium': 'Contemporary\x20Dance',
    'description': 'Choreographed\x20performance\x20exploring\x20the\x20four\x20classical\x20elements\x20through\x20movement,\x20light,\x20and\x20sound.',
    'dimensions': '45-minute\x20performance',
    'year': '2023',
    'price': 'Commission'
}, {
    'id': 0xa,
    'title': 'Digital\x20Dreams',
    'artist': 'Alex\x20Rivera',
    'artistId': 0xa,
    'category': 'visual',
    'medium': 'Digital\x20Art',
    'description': 'A\x20vibrant\x20exploration\x20of\x20digital\x20consciousness\x20through\x20algorithmic\x20art\x20and\x20generative\x20design.',
    'dimensions': 'Digital',
    'year': '2023',
    'price': '$1,200'
}];
const _0x2c62f9 = [{
    'id': 0x1,
    'name': 'Sarah\x20Chen',
    'specialty': 'Visual\x20Artist',
    'bio': 'Sarah\'s\x20work\x20explores\x20the\x20intersection\x20of\x20traditional\x20painting\x20techniques\x20and\x20contemporary\x20digital\x20aesthetics.',
    'artworks': [0x1],
    'initial': 'S'
}, {
    'id': 0x2,
    'name': 'Marcus\x20Rodriguez',
    'specialty': 'Mixed\x20Media\x20Artist',
    'bio': 'Marcus\x20creates\x20urban-inspired\x20artworks\x20using\x20found\x20materials\x20and\x20traditional\x20media.',
    'artworks': [0x2],
    'initial': 'M'
}, {
    'id': 0x3,
    'name': 'Aisha\x20Patel',
    'specialty': 'Watercolor\x20Artist',
    'bio': 'Aisha\'s\x20delicate\x20watercolor\x20works\x20focus\x20on\x20themes\x20of\x20memory\x20and\x20emotional\x20landscapes.',
    'artworks': [0x3],
    'initial': 'A'
}, {
    'id': 0x4,
    'name': 'Eleanor\x20Vance',
    'specialty': 'Poet\x20&\x20Writer',
    'bio': 'Eleanor\'s\x20poetry\x20explores\x20the\x20relationship\x20between\x20nature\x20and\x20human\x20experience.',
    'artworks': [0x4],
    'initial': 'E'
}, {
    'id': 0x5,
    'name': 'James\x20Fitzgerald',
    'specialty': 'Fiction\x20Writer',
    'bio': 'James\x20writes\x20interconnected\x20stories\x20about\x20modern\x20urban\x20life\x20and\x20digital\x20culture.',
    'artworks': [0x5],
    'initial': 'J'
}, {
    'id': 0x6,
    'name': 'Lena\x20Petrov',
    'specialty': 'Ceramic\x20Artist',
    'bio': 'Lena\x20combines\x20traditional\x20pottery\x20techniques\x20with\x20contemporary\x20design\x20principles.',
    'artworks': [0x6],
    'initial': 'L'
}, {
    'id': 0x7,
    'name': 'Isabella\x20Garcia',
    'specialty': 'Textile\x20Artist',
    'bio': 'Isabella\x20creates\x20handwoven\x20tapestries\x20using\x20natural\x20dyes\x20and\x20traditional\x20techniques.',
    'artworks': [0x7],
    'initial': 'I'
}, {
    'id': 0x8,
    'name': 'David\x20Kim',
    'specialty': 'Sculptor',
    'bio': 'David\x20creates\x20interactive\x20kinetic\x20sculptures\x20that\x20respond\x20to\x20environmental\x20factors.',
    'artworks': [0x8],
    'initial': 'D'
}, {
    'id': 0x9,
    'name': 'Maya\x20Collective',
    'specialty': 'Performance\x20Group',
    'bio': 'A\x20collaborative\x20group\x20exploring\x20contemporary\x20dance\x20and\x20multimedia\x20performance.',
    'artworks': [0x9],
    'initial': 'M'
}, {
    'id': 0xa,
    'name': 'Alex\x20Rivera',
    'specialty': 'Digital\x20Artist',
    'bio': 'Alex\x20creates\x20generative\x20art\x20that\x20explores\x20the\x20intersection\x20of\x20technology\x20and\x20creativity.',
    'artworks': [0xa],
    'initial': 'A'
}];
const _0x2c62fa = [{
    'icon': 'fas\x20fa-map-marker-alt',
    'title': 'Location',
    'content': '123\x20Gallery\x20District<br>Cultural\x20Center,\x20Metro\x20City'
}, {
    'icon': 'fas\x20fa-clock',
    'title': 'Hours',
    'content': 'Tuesday\x20-\x20Sunday:\x2010AM\x20-\x206PM<br>Friday:\x2010AM\x20-\x208PM'
}, {
    'icon': 'fas\x20fa-phone',
    'title': 'Contact',
    'content': '+1\x20(555)\x20123-4567<br>info@artisangallery.com'
}, {
    'icon': 'fas\x20fa-ticket-alt',
    'title': 'Admission',
    'content': 'General:\x20$15<br>Students\x20&\x20Seniors:\x20$10<br>Members:\x20Free'
}, {
    'icon': 'fas\x20fa-bus',
    'title': 'Transportation',
    'content': 'Metro\x20Line\x20B\x20-\x20Gallery\x20Station<br>Bus\x20Routes:\x2012,\x2024,\x2036'
}, {
    'icon': 'fas\x20fa-wheelchair',
    'title': 'Accessibility',
    'content': 'Fully\x20wheelchair\x20accessible<br>Audio\x20guides\x20available'
}];
document[_0x5e7c('0x3')]('DOMContentLoaded', function() {
    setTimeout(() => {
        _0x2c62f1['style']['opacity'] = '0';
        setTimeout(() => {
            _0x2c62f1['style'][_0x5e7c('0xd')] = 'none';
        }, 0x1f4);
    }, 0x7d0);
    _0x2c62fb();
    _0x2c62fc();
    _0x2c62fd();
    _0x2c62fe();
    _0x2c62ff();
});
function _0x2c62fe() {
    _0x2c62e8[_0x5e7c('0x3')]('click', _0x2c6300);
    _0x2c62e9[_0x5e7c('0x3')]('click', _0x2c6301);
    _0x2c62eb['forEach'](_0x2c6302 => {
        _0x2c6302[_0x5e7c('0x3')]('click', function() {
            _0x2c62eb['forEach'](_0x2c6303 => _0x2c6303[_0x5e7c('0x5')][_0x5e7c('0x6')]('active'));
            this[_0x5e7c('0x5')][_0x5e7c('0x7')]('active');
            _0x2c6304(this[_0x5e7c('0x9')][_0x5e7c('0xa')]);
        });
    });
    _0x2c62f0[_0x5e7c('0x3')]('click', _0x2c6305);
    window[_0x5e7c('0x3')]('click', function(_0x2c6306) {
        if (_0x2c6306['target'] === _0x2c62ef) {
            _0x2c6305();
        }
    });
    document[_0x5e7c('0x2')]('.nav-link')['forEach'](_0x2c6307 => {
        _0x2c6307[_0x5e7c('0x3')]('click', function(_0x2c6308) {
            _0x2c6308['preventDefault']();
            const _0x2c6309 = this['getAttribute']('href');
            const _0x2c630a = document[_0x5e7c('0x1')](_0x2c6309);
            if (_0x2c630a) {
                _0x2c62ea[_0x5e7c('0x5')][_0x5e7c('0x6')]('active');
                window['scrollTo']({
                    'top': _0x2c630a['offsetTop'] - 0x50,
                    'behavior': 'smooth'
                });
            }
        });
    });
    if (_0x2c62f2) {
        _0x2c62f2[_0x5e7c('0x3')]('click', function() {
            document[_0x5e7c('0x1')]('#gallery')['scrollIntoView']({
                'behavior': 'smooth'
            });
        });
    }
    if (_0x2c62f3) {
        _0x2c62f3[_0x5e7c('0x3')]('click', function() {
            document[_0x5e7c('0x1')]('#exhibitions')[_0x5e7c('0x16')]({
                'behavior': 'smooth'
            });
        });
    }
    document[_0x5e7c('0x2')]('.category-card')['forEach'](_0x2c630b => {
        _0x2c630b[_0x5e7c('0x3')]('click', function() {
            const _0x2c630c = this[_0x5e7c('0x9')]['category'];
            _0x2c62eb['forEach'](_0x2c630d => _0x2c630d[_0x5e7c('0x5')][_0x5e7c('0x6')]('active'));
            document[_0x5e7c('0x1')](`.filter-btn[data-filter="${_0x2c630c}"]`)[_0x5e7c('0x5')][_0x5e7c('0x7')]('active');
            _0x2c6304(_0x2c630c);
            document[_0x5e7c('0x1')]('#gallery')[_0x5e7c('0x16')]({
                'behavior': 'smooth'
            });
        });
    });
    if (_0x2c62f4 && _0x2c62f5) {
        _0x2c62f4[_0x5e7c('0x3')]('click', () => _0x2c630e(-0x12c));
        _0x2c62f5[_0x5e7c('0x3')]('click', () => _0x2c630e(0x12c));
    }
    if (_0x2c62f6 && _0x2c62f7) {
        _0x2c62f6[_0x5e7c('0x3')]('click', () => _0x2c630f(-0x190));
        _0x2c62f7[_0x5e7c('0x3')]('click', () => _0x2c630f(0x190));
    }
    let _0x2c6310;
    if (_0x2c62ed) {
        _0x2c62ed[_0x5e7c('0x3')]('touchstart', _0x2c6311 => {
            _0x2c6310 = _0x2c6311['touches'][0x0]['clientX'];
        });
        _0x2c62ed[_0x5e7c('0x3')]('touchend', _0x2c6312 => {
            const _0x2c6313 = _0x2c6312['changedTouches'][0x0]['clientX'];
            const _0x2c6314 = _0x2c6310 - _0x2c6313;
            if (Math['abs'](_0x2c6314) > 0x32) {
                _0x2c630e(_0x2c6314 > 0x0 ? -0x12c : 0x12c);
            }
        });
    }
    if (_0x2c62ee) {
        _0x2c62ee[_0x5e7c('0x3')]('touchstart', _0x2c6315 => {
            _0x2c6310 = _0x2c6315['touches'][0x0]['clientX'];
        });
        _0x2c62ee[_0x5e7c('0x3')]('touchend', _0x2c6316 => {
            const _0x2c6317 = _0x2c6316['changedTouches'][0x0]['clientX'];
            const _0x2c6318 = _0x2c6310 - _0x2c6317;
            if (Math['abs'](_0x2c6318) > 0x32) {
                _0x2c630f(_0x2c6318 > 0x0 ? -0x190 : 0x190);
            }
        });
    }
}
function _0x2c6300() {
    const _0x2c6319 = document['documentElement'][_0x5e7c('0x1f')]('data-theme');
    const _0x2c631a = _0x2c6319 === 'dark' ? 'light' : 'dark';
    document['documentElement'][_0x5e7c('0x20')]('data-theme', _0x2c631a);
    const _0x2c631b = _0x2c62e8[_0x5e7c('0x1')]('i');
    _0x2c631b['className'] = _0x2c631a === 'dark' ? 'fas\x20fa-sun' : 'fas\x20fa-moon';
    localStorage['setItem']('theme', _0x2c631a);
}
function _0x2c6301() {
    _0x2c62ea[_0x5e7c('0x5')][_0x5e7c('0x4')]('active');
    const _0x2c631c = _0x2c62e9[_0x5e7c('0x2')]('span');
    if (_0x2c62ea[_0x5e7c('0x5')][_0x5e7c('0x8')]('active')) {
        _0x2c631c[0x0]['style'][_0x5e7c('0x11')] = 'rotate(45deg)\x20translate(5px,\x205px)';
        _0x2c631c[0x1]['style']['opacity'] = '0';
        _0x2c631c[0x2]['style'][_0x5e7c('0x11')] = 'rotate(-45deg)\x20translate(7px,\x20-6px)';
    } else {
        _0x2c631c[0x0]['style'][_0x5e7c('0x11')] = 'none';
        _0x2c631c[0x1]['style']['opacity'] = '1';
        _0x2c631c[0x2]['style'][_0x5e7c('0x11')] = 'none';
    }
}
function _0x2c62fb() {
    _0x2c62ec['innerHTML'] = '';
    const _0x2c631d = [..._0x2c62f8, ..._0x2c62f8, ..._0x2c62f8];
    _0x2c631d['forEach'](_0x2c631e => {
        const _0x2c631f = document[_0x5e7c('0x13')]('div');
        _0x2c631f['className'] = `artwork-card\x20${_0x2c631e['category']}`;
        _0x2c631f['setAttribute']('data-category', _0x2c631e['category']);
        _0x2c631f['setAttribute']('data-artwork-id', _0x2c631e['id']);
        _0x2c631f['setAttribute']('data-artist-id', _0x2c631e['artistId']);
        _0x2c631f['innerHTML'] = `\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class="artwork-image">\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class="artwork-preview">\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20${_0x2c6320(_0x2c631e['category'])}\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class="artwork-info">\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>${_0x2c631e['title']}</h3>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class="artwork-artist">${_0x2c631e['artist']}</p>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class="artwork-category">${_0x2c6321(_0x2c631e['category'])}</p>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class="artwork-description">${_0x2c631e['description']}</p>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20`;
        _0x2c631f[_0x5e7c('0x3')]('click', () => _0x2c6322(_0x2c631e));
        _0x2c62ec[_0x5e7c('0x15')](_0x2c631f);
    });
}
function _0x2c62fc() {
    _0x2c62ed['innerHTML'] = '';
    const _0x2c6323 = [..._0x2c62f9, ..._0x2c62f9, ..._0x2c62f9];
    _0x2c6323['forEach'](_0x2c6324 => {
        const _0x2c6325 = document[_0x5e7c('0x13')]('div');
        _0x2c6325['className'] = 'artist-scroll-card';
        _0x2c6325['setAttribute']('data-artist-id', _0x2c6324['id']);
        const _0x2c6326 = _0x2c62f8[_0x5e7c('0xa')](_0x2c6327 => _0x2c6327['artistId'] === _0x2c6324['id']);
        _0x2c6325['innerHTML'] = `\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class="artist-scroll-header">\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class="artist-scroll-avatar">\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20${_0x2c6324['initial']}\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class="artist-scroll-info">\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>${_0x2c6324['name']}</h3>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class="artist-scroll-specialty">${_0x2c6324['specialty']}</p>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class="artist-bio">${_0x2c6324['bio']}</p>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class="artist-scroll-artworks">\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20${_0x2c6326['map'](_0x2c6328 => `\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class="artist-artwork-preview"\x20data-artwork-id="${_0x2c6328['id']}">\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20${_0x2c6328['title']['split'](' ')['map'](_0x2c6329 => _0x2c6329[0x0])['join']('')['toUpperCase']()}\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20`)[_0x5e7c('0x21')]('')}\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20`;
        _0x2c6325[_0x5e7c('0x3')]('click', () => {
            if (_0x2c6326['length'] > 0x0) {
                const _0x2c632a = _0x2c6326[0x0]['id'];
                const _0x2c632b = document[_0x5e7c('0x1')](`[data-artwork-id="${_0x2c632a}"]`);
                if (_0x2c632b) {
                    _0x2c632b[_0x5e7c('0x16')]({
                        'behavior': 'smooth',
                        'block': 'center'
                    });
                    _0x2c632b['style'][_0x5e7c('0x11')] = 'scale(1.05)';
                    _0x2c632b['style'][_0x5e7c('0x18')] = '0\x2010px\x2030px\x20rgba(44,\x2062,\x2080,\x200.3)';
                    setTimeout(() => {
                        _0x2c632b['style'][_0x5e7c('0x11')] = '';
                        _0x2c632b['style'][_0x5e7c('0x18')] = '';
                    }, 0x7d0);
                }
            }
        });
        _0x2c62ed[_0x5e7c('0x15')](_0x2c6325);
    });
}
function _0x2c62fd() {
    _0x2c62ee['innerHTML'] = '';
    const _0x2c632c = [..._0x2c62fa, ..._0x2c62fa, ..._0x2c62fa];
    _0x2c632c['forEach'](_0x2c632d => {
        const _0x2c632e = document[_0x5e7c('0x13')]('div');
        _0x2c632e['className'] = 'gallery-info-card';
        _0x2c632e['innerHTML'] = `\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class="gallery-info-header">\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class="gallery-info-icon">\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class="${_0x2c632d['icon']}"></i>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class="gallery-info-content">\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>${_0x2c632d['title']}</h3>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>${_0x2c632d['content']}</p>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20`;
        _0x2c62ee[_0x5e7c('0x15')](_0x2c632e);
    });
}
function _0x2c630e(_0x2c632f) {
    _0x2c62ed['style'][_0x5e7c('0x1a')] = 'paused';
    const _0x2c6330 = _0x2c62ed['scrollLeft'] || parseInt(_0x2c6331(_0x2c62ed)[_0x5e7c('0x1b')]()[_0x5e7c('0x1c')](',')[0x4]) || 0x0;
    const _0x2c6332 = _0x2c6330 + _0x2c632f;
    _0x2c62ed['style'][_0x5e7c('0x11')] = `translateX(${_0x2c6332}px)`;
    setTimeout(() => {
        _0x2c62ed['style'][_0x5e7c('0x1a')] = 'running';
    }, 0xbb8);
}
function _0x2c630f(_0x2c6333) {
    _0x2c62ee['style'][_0x5e7c('0x1a')] = 'paused';
    const _0x2c6334 = _0x2c62ee['scrollLeft'] || parseInt(_0x2c6331(_0x2c62ee)[_0x5e7c('0x1b')]()[_0x5e7c('0x1c')](',')[0x4]) || 0x0;
    const _0x2c6335 = _0x2c6334 + _0x2c6333;
    _0x2c62ee['style'][_0x5e7c('0x11')] = `translateX(${_0x2c6335}px)`;
    setTimeout(() => {
        _0x2c62ee['style'][_0x5e7c('0x1a')] = 'running';
    }, 0xbb8);
}
function _0x2c6304(_0x2c6336) {
    const _0x2c6337 = document[_0x5e7c('0x2')]('.artwork-card');
    _0x2c6337['forEach'](_0x2c6338 => {
        if (_0x2c6336 === 'all' || _0x2c6338['dataset']['category'] === _0x2c6336) {
            _0x2c6338['style'][_0x5e7c('0xd')] = 'block';
            setTimeout(() => {
                _0x2c6338['style']['opacity'] = '1';
                _0x2c6338['style'][_0x5e7c('0x11')] = 'translateY(0)';
            }, 0x64);
        } else {
            _0x2c6338['style']['opacity'] = '0';
            _0x2c6338['style'][_0x5e7c('0x11')] = 'translateY(20px)';
            setTimeout(() => {
                _0x2c6338['style'][_0x5e7c('0xd')] = 'none';
            }, 0x12c);
        }
    });
}
function _0x2c6320(_0x2c6339) {
    const _0x2c633a = {
        'visual': `\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width="100%"\x20height="100%"\x20viewBox="0\x200\x20100\x20100">\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<defs>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<linearGradient\x20id="visualGradient"\x20x1="0%"\x20y1="0%"\x20x2="100%"\x20y2="100%">\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset="0%"\x20style="stop-color:#3498db;stop-opacity:1"\x20/>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset="100%"\x20style="stop-color:#2c3e50;stop-opacity:1"\x20/>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</linearGradient>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</defs>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20x="10"\x20y="10"\x20width="80"\x20height="80"\x20fill="url(#visualGradient)"\x20rx="8"/>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx="30"\x20cy="30"\x20r="8"\x20fill="#e74c3c"/>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20x="60"\x20y="25"\x20width="20"\x20height="10"\x20fill="#f1c40f"\x20rx="2"/>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d="M25,65\x20L45,45\x20L75,75"\x20stroke="#2ecc71"\x20stroke-width="3"\x20fill="none"/>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20`,
        'literary': `\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width="100%"\x20height="100%"\x20viewBox="0\x200\x20100\x20100">\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<defs>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<linearGradient\x20id="literaryGradient"\x20x1="0%"\x20y1="0%"\x20x2="100%"\x20y2="100%">\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset="0%"\x20style="stop-color:#9b59b6;stop-opacity:1"\x20/>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset="100%"\x20style="stop-color:#8e44ad;stop-opacity:1"\x20/>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</linearGradient>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</defs>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20x="15"\x20y="15"\x20width="70"\x20height="70"\x20fill="url(#literaryGradient)"\x20rx="4"/>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20x="25"\x20y="25"\x20width="50"\x20height="5"\x20fill="#ecf0f1"\x20rx="2"/>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20x="25"\x20y="35"\x20width="40"\x20height="5"\x20fill="#ecf0f1"\x20rx="2"/>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20x="25"\x20y="45"\x20width="45"\x20height="5"\x20fill="#ecf0f1"\x20rx="2"/>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20x="25"\x20y="55"\x20width="35"\x20height="5"\x20fill="#ecf0f1"\x20rx="2"/>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20x="25"\x20y="65"\x20width="50"\x20height="5"\x20fill="#ecf0f1"\x20rx="2"/>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20`,
        'applied': `\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width="100%"\x20height="100%"\x20viewBox="0\x200\x20100\x20100">\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<defs>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<linearGradient\x20id="appliedGradient"\x20x1="0%"\x20y1="0%"\x20x2="100%"\x20y2="100%">\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset="0%"\x20style="stop-color:#e67e22;stop-opacity:1"\x20/>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset="100%"\x20style="stop-color:#d35400;stop-opacity:1"\x20/>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</linearGradient>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</defs>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx="50"\x20cy="40"\x20r="15"\x20fill="url(#appliedGradient)"/>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d="M35,60\x20Q50,80\x2065,60"\x20fill="none"\x20stroke="#34495e"\x20stroke-width="4"/>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20x="40"\x20y="60"\x20width="20"\x20height="25"\x20fill="#34495e"\x20rx="2"/>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20`,
        'performance': `\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20width="100%"\x20height="100%"\x20viewBox="0\x200\x20100\x20100">\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<defs>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<linearGradient\x20id="performanceGradient"\x20x1="0%"\x20y1="0%"\x20x2="100%"\x20y2="100%">\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset="0%"\x20style="stop-color:#e74c3c;stop-opacity:1"\x20/>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset="100%"\x20style="stop-color:#c0392b;stop-opacity:1"\x20/>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</linearGradient>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</defs>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx="50"\x20cy="50"\x20r="35"\x20fill="url(#performanceGradient)"/>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d="M35,35\x20L45,45\x20M65,35\x20L55,45\x20M35,65\x20L45,55\x20M65,65\x20L55,55"\x20stroke="#ecf0f1"\x20stroke-width="3"\x20fill="none"/>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx="50"\x20cy="50"\x20r="8"\x20fill="#ecf0f1"/>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20`
    };
    return _0x2c633a[_0x2c6339] || _0x2c633a['visual'];
}
function _0x2c6321(_0x2c633b) {
    const _0x2c633c = {
        'visual': 'Visual\x20Arts',
        'literary': 'Literary\x20Arts',
        'applied': 'Applied\x20Arts',
        'performance': 'Performance\x20Arts'
    };
    return _0x2c633c[_0x2c633b] || 'Visual\x20Arts';
}
function _0x2c6322(_0x2c633d) {
    document['getElementById']('modalTitle')['textContent'] = _0x2c633d['title'];
    document['getElementById']('modalArtist')['textContent'] = _0x2c633d['artist'];
    document['getElementById']('modalCategory')['textContent'] = _0x2c6321(_0x2c633d['category']);
    document['getElementById']('modalDescription')['textContent'] = _0x2c633d['description'];
    document['getElementById']('modalMedium')['textContent'] = _0x2c633d['medium'];
    document['getElementById']('modalDimensions')['textContent'] = _0x2c633d['dimensions'];
    document['getElementById']('modalYear')['textContent'] = _0x2c633d['year'];
    const _0x2c633e = document['getElementById']('modalArtwork');
    _0x2c633e['innerHTML'] = _0x2c6320(_0x2c633d['category']);
    _0x2c62ef['style'][_0x5e7c('0xd')] = 'flex';
    document['body']['style']['overflow'] = 'hidden';
}
function _0x2c6305() {
    _0x2c62ef['style'][_0x5e7c('0xd')] = 'none';
    document['body']['style']['overflow'] = 'auto';
}
function _0x2c62ff() {
    const _0x2c633f = localStorage['getItem']('theme');
    if (_0x2c633f) {
        document['documentElement']['setAttribute']('data-theme', _0x2c633f);
        const _0x2c6340 = _0x2c62e8['querySelector']('i');
        _0x2c6340['className'] = _0x2c633f === 'dark' ? 'fas\x20fa-sun' : 'fas\x20fa-moon';
        }
}

function _0x2c6300() {
    const _0x2c6319 = document['documentElement'][_0x5e7c('0x1f')]('data-theme');
    const _0x2c631a = _0x2c6319 === 'dark' ? 'light' : 'dark';
    document['documentElement'][_0x5e7c('0x20')]('data-theme', _0x2c631a);
    const _0x2c631b = _0x2c62e8[_0x5e7c('0x1')]('i');
    _0x2c631b['className'] = _0x2c631a === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    localStorage['setItem']('theme', _0x2c631a);
}

function _0x2c6301() {
    _0x2c62ea[_0x5e7c('0x5')][_0x5e7c('0x4')]('active');
    const _0x2c631c = _0x2c62e9[_0x5e7c('0x2')]('span');
    if (_0x2c62ea[_0x5e7c('0x5')][_0x5e7c('0x8')]('active')) {
        _0x2c631c[0x0]['style'][_0x5e7c('0x11')] = 'rotate(45deg) translate(5px, 5px)';
        _0x2c631c[0x1]['style']['opacity'] = '0';
        _0x2c631c[0x2]['style'][_0x5e7c('0x11')] = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        _0x2c631c[0x0]['style'][_0x5e7c('0x11')] = 'none';
        _0x2c631c[0x1]['style']['opacity'] = '1';
        _0x2c631c[0x2]['style'][_0x5e7c('0x11')] = 'none';
    }
}

function _0x2c62fb() {
    _0x2c62ec['innerHTML'] = '';
    const _0x2c631d = [..._0x2c62f8, ..._0x2c62f8, ..._0x2c62f8];
    _0x2c631d['forEach'](_0x2c631e => {
        const _0x2c631f = document[_0x5e7c('0x13')]('div');
        _0x2c631f['className'] = `artwork-card ${_0x2c631e['category']}`;
        _0x2c631f['setAttribute']('data-category', _0x2c631e['category']);
        _0x2c631f['setAttribute']('data-artwork-id', _0x2c631e['id']);
        _0x2c631f['setAttribute']('data-artist-id', _0x2c631e['artistId']);
        _0x2c631f['innerHTML'] = `
            <div class="artwork-image">
                <div class="artwork-preview">
                    ${_0x2c6320(_0x2c631e['category'])}
                </div>
            </div>
            <div class="artwork-info">
                <h3>${_0x2c631e['title']}</h3>
                <p class="artwork-artist">${_0x2c631e['artist']}</p>
                <p class="artwork-category">${_0x2c6321(_0x2c631e['category'])}</p>
                <p class="artwork-description">${_0x2c631e['description']}</p>
            </div>
        `;
        _0x2c631f[_0x5e7c('0x3')]('click', () => _0x2c6322(_0x2c631e));
        _0x2c62ec[_0x5e7c('0x15')](_0x2c631f);
    });
}

function _0x2c62fc() {
    _0x2c62ed['innerHTML'] = '';
    const _0x2c6323 = [..._0x2c62f9, ..._0x2c62f9, ..._0x2c62f9];
    _0x2c6323['forEach'](_0x2c6324 => {
        const _0x2c6325 = document[_0x5e7c('0x13')]('div');
        _0x2c6325['className'] = 'artist-scroll-card';
        _0x2c6325['setAttribute']('data-artist-id', _0x2c6324['id']);
        const _0x2c6326 = _0x2c62f8[_0x5e7c('0xa')](_0x2c6327 => _0x2c6327['artistId'] === _0x2c6324['id']);
        _0x2c6325['innerHTML'] = `
            <div class="artist-scroll-header">
                <div class="artist-scroll-avatar">
                    ${_0x2c6324['initial']}
                </div>
                <div class="artist-scroll-info">
                    <h3>${_0x2c6324['name']}</h3>
                    <p class="artist-scroll-specialty">${_0x2c6324['specialty']}</p>
                </div>
            </div>
            <p class="artist-bio">${_0x2c6324['bio']}</p>
            <div class="artist-scroll-artworks">
                ${_0x2c6326['map'](_0x2c6328 => `
                    <div class="artist-artwork-preview" data-artwork-id="${_0x2c6328['id']}">
                        ${_0x2c6328['title']['split'](' ')['map'](_0x2c6329 => _0x2c6329[0x0])['join']('')['toUpperCase']()}
                    </div>
                `)['join']('')}
            </div>
        `;
        _0x2c6325[_0x5e7c('0x3')]('click', () => {
            if (_0x2c6326['length'] > 0x0) {
                const _0x2c632a = _0x2c6326[0x0]['id'];
                const _0x2c632b = document[_0x5e7c('0x1')](`[data-artwork-id="${_0x2c632a}"]`);
                if (_0x2c632b) {
                    _0x2c632b[_0x5e7c('0x16')]({
                        'behavior': 'smooth',
                        'block': 'center'
                    });
                    _0x2c632b['style'][_0x5e7c('0x11')] = 'scale(1.05)';
                    _0x2c632b['style'][_0x5e7c('0x18')] = '0 10px 30px rgba(44, 62, 80, 0.3)';
                    setTimeout(() => {
                        _0x2c632b['style'][_0x5e7c('0x11')] = '';
                        _0x2c632b['style'][_0x5e7c('0x18')] = '';
                    }, 0x7d0);
                }
            }
        });
        _0x2c62ed[_0x5e7c('0x15')](_0x2c6325);
    });
}

function _0x2c62fd() {
    _0x2c62ee['innerHTML'] = '';
    const _0x2c632c = [..._0x2c62fa, ..._0x2c62fa, ..._0x2c62fa];
    _0x2c632c['forEach'](_0x2c632d => {
        const _0x2c632e = document[_0x5e7c('0x13')]('div');
        _0x2c632e['className'] = 'gallery-info-card';
        _0x2c632e['innerHTML'] = `
            <div class="gallery-info-header">
                <div class="gallery-info-icon">
                    <i class="${_0x2c632d['icon']}"></i>
                </div>
                <div class="gallery-info-content">
                    <h3>${_0x2c632d['title']}</h3>
                    <p>${_0x2c632d['content']}</p>
                </div>
            </div>
        `;
        _0x2c62ee[_0x5e7c('0x15')](_0x2c632e);
    });
}

function _0x2c630e(_0x2c632f) {
    _0x2c62ed['style'][_0x5e7c('0x1a')] = 'paused';
    const _0x2c6330 = _0x2c62ed['scrollLeft'] || parseInt(_0x2c6331(_0x2c62ed)[_0x5e7c('0x1b')]()[_0x5e7c('0x1c')](',')[0x4]) || 0x0;
    const _0x2c6332 = _0x2c6330 + _0x2c632f;
    _0x2c62ed['style'][_0x5e7c('0x11')] = `translateX(${_0x2c6332}px)`;
    setTimeout(() => {
        _0x2c62ed['style'][_0x5e7c('0x1a')] = 'running';
    }, 0xbb8);
}

function _0x2c630f(_0x2c6333) {
    _0x2c62ee['style'][_0x5e7c('0x1a')] = 'paused';
    const _0x2c6334 = _0x2c62ee['scrollLeft'] || parseInt(_0x2c6331(_0x2c62ee)[_0x5e7c('0x1b')]()[_0x5e7c('0x1c')](',')[0x4]) || 0x0;
    const _0x2c6335 = _0x2c6334 + _0x2c6333;
    _0x2c62ee['style'][_0x5e7c('0x11')] = `translateX(${_0x2c6335}px)`;
    setTimeout(() => {
        _0x2c62ee['style'][_0x5e7c('0x1a')] = 'running';
    }, 0xbb8);
}

function _0x2c6304(_0x2c6336) {
    const _0x2c6337 = document[_0x5e7c('0x2')]('.artwork-card');
    _0x2c6337['forEach'](_0x2c6338 => {
        if (_0x2c6336 === 'all' || _0x2c6338['dataset']['category'] === _0x2c6336) {
            _0x2c6338['style'][_0x5e7c('0xd')] = 'block';
            setTimeout(() => {
                _0x2c6338['style']['opacity'] = '1';
                _0x2c6338['style'][_0x5e7c('0x11')] = 'translateY(0)';
            }, 0x64);
        } else {
            _0x2c6338['style']['opacity'] = '0';
            _0x2c6338['style'][_0x5e7c('0x11')] = 'translateY(20px)';
            setTimeout(() => {
                _0x2c6338['style'][_0x5e7c('0xd')] = 'none';
            }, 0x12c);
        }
    });
}

function _0x2c6320(_0x2c6339) {
    const _0x2c633a = {
        'visual': `
            <svg width="100%" height="100%" viewBox="0 0 100 100">
                <defs>
                    <linearGradient id="visualGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#3498db;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#2c3e50;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <rect x="10" y="10" width="80" height="80" fill="url(#visualGradient)" rx="8"/>
                <circle cx="30" cy="30" r="8" fill="#e74c3c"/>
                <rect x="60" y="25" width="20" height="10" fill="#f1c40f" rx="2"/>
                <path d="M25,65 L45,45 L75,75" stroke="#2ecc71" stroke-width="3" fill="none"/>
            </svg>
        `,
        'literary': `
            <svg width="100%" height="100%" viewBox="0 0 100 100">
                <defs>
                    <linearGradient id="literaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#9b59b6;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#8e44ad;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <rect x="15" y="15" width="70" height="70" fill="url(#literaryGradient)" rx="4"/>
                <rect x="25" y="25" width="50" height="5" fill="#ecf0f1" rx="2"/>
                <rect x="25" y="35" width="40" height="5" fill="#ecf0f1" rx="2"/>
                <rect x="25" y="45" width="45" height="5" fill="#ecf0f1" rx="2"/>
                <rect x="25" y="55" width="35" height="5" fill="#ecf0f1" rx="2"/>
                <rect x="25" y="65" width="50" height="5" fill="#ecf0f1" rx="2"/>
            </svg>
        `,
        'applied': `
            <svg width="100%" height="100%" viewBox="0 0 100 100">
                <defs>
                    <linearGradient id="appliedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#e67e22;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#d35400;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <circle cx="50" cy="40" r="15" fill="url(#appliedGradient)"/>
                <path d="M35,60 Q50,80 65,60" fill="none" stroke="#34495e" stroke-width="4"/>
                <rect x="40" y="60" width="20" height="25" fill="#34495e" rx="2"/>
            </svg>
        `,
        'performance': `
            <svg width="100%" height="100%" viewBox="0 0 100 100">
                <defs>
                    <linearGradient id="performanceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#e74c3c;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#c0392b;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="35" fill="url(#performanceGradient)"/>
                <path d="M35,35 L45,45 M65,35 L55,45 M35,65 L45,55 M65,65 L55,55" stroke="#ecf0f1" stroke-width="3" fill="none"/>
                <circle cx="50" cy="50" r="8" fill="#ecf0f1"/>
            </svg>
        `
    };
    return _0x2c633a[_0x2c6339] || _0x2c633a['visual'];
}

function _0x2c6321(_0x2c633b) {
    const _0x2c633c = {
        'visual': 'Visual Arts',
        'literary': 'Literary Arts',
        'applied': 'Applied Arts',
        'performance': 'Performance Arts'
    };
    return _0x2c633c[_0x2c633b] || 'Visual Arts';
}

function _0x2c6322(_0x2c633d) {
    document['getElementById']('modalTitle')['textContent'] = _0x2c633d['title'];
    document['getElementById']('modalArtist')['textContent'] = _0x2c633d['artist'];
    document['getElementById']('modalCategory')['textContent'] = _0x2c6321(_0x2c633d['category']);
    document['getElementById']('modalDescription')['textContent'] = _0x2c633d['description'];
    document['getElementById']('modalMedium')['textContent'] = _0x2c633d['medium'];
    document['getElementById']('modalDimensions')['textContent'] = _0x2c633d['dimensions'];
    document['getElementById']('modalYear')['textContent'] = _0x2c633d['year'];
    const _0x2c633e = document['getElementById']('modalArtwork');
    _0x2c633e['innerHTML'] = _0x2c6320(_0x2c633d['category']);
    _0x2c62ef['style'][_0x5e7c('0xd')] = 'flex';
    document['body']['style']['overflow'] = 'hidden';
}

function _0x2c6305() {
    _0x2c62ef['style'][_0x5e7c('0xd')] = 'none';
    document['body']['style']['overflow'] = 'auto';
}

function _0x2c62ff() {
    const _0x2c633f = localStorage['getItem']('theme');
    if (_0x2c633f) {
        document['documentElement']['setAttribute']('data-theme', _0x2c633f);
        const _0x2c6340 = _0x2c62e8['querySelector']('i');
        _0x2c6340['className'] = _0x2c633f === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}
