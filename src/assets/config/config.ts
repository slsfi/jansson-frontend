type Config = { [key: string]: any }

export const config: Config = {
  app: {
    siteURLOrigin: "https://testa-jansson.sls.fi",
    projectNameDB: "jansson",
    projectId: 1,
    backendBaseURL: "https://testa-jansson-api.sls.fi/digitaledition",
    alternateFacsimileBaseURL: "",
    i18n: {
      languages: [
        { code: "sv", label: "Svenska", region: "FI" },
        { code: "en", label: "English", region: "GB" }
      ],
      defaultLanguage: "sv",
      multilingualCollectionTableOfContents: true,
      multilingualReadingTextLanguages: [],
      multilingualNamedEntityData: false
    },
    enableRouterLoadingBar: true,
    auth: {
      enabled: true,
      backendAuthBaseURL: "https://testa-jansson-api.sls.fi/"
    },
    openGraphMetaTags: {
      enabled: true,
      image: {
        sv: {
          altText: "Svartvitt foto av en kvinna med kort hår och stickad tröja som sitter vid ett skrivbord, omgiven av papper och teckningar, och skriver under en bordslampa.",
          URL: "assets/images/open-graph/tove-janssons-skrifter-1200x630.jpg"
        },
        en: {
          altText: "Black and white photo of a woman with short hair and a knitted sweater sitting at a desk, surrounded by papers and drawings, writing under a desk lamp.",
          URL: "assets/images/open-graph/writings-of-tove-jansson-1200x630.jpg"
        }
      }
    },
    prebuild: {
      featureBasedRoutes: true,
      sitemap: true,
      staticCollectionMenus: false
    },
    ssr: {
      trustProxyHops: 2,
      collectionSideMenu: false
    }
  },
  articles: [
    {
      id: "04-01",
      language: "sv",
      routeName: "om-tove-jansson",
      title: "Om Tove Jansson",
      coverURL: "",
      enableTOC: false,
      downloadOptions: []
    },
    {
      id: "04-01",
      language: "en",
      routeName: "about-tove-jansson",
      title: "About Tove Jansson",
      coverURL: "",
      enableTOC: false,
      downloadOptions: []
    }
  ],
  collections: {
    addTEIClassNames: false,
    replaceImageAssetsPaths: false,
    enableLegacyIDs: false,
    enableMathJax: false,
    firstTextItem: { 1: "1_1" },
    frontMatterPages: {
      cover: false,
      title: false,
      foreword: false,
      introduction: false
    },
    frontMatterPageDisabled: {
      cover: [],
      title: [],
      foreword: [],
      introduction: []
    },
    highlightSearchMatches: true,
    inlineIllustrations: [],
    mediaCollectionMappings: {},
    order: [
      [1]
    ]
  },
  ebooks: [],
  page: {
    about: {
      initialPageNode: "01"
    },
    article: {
      showTextDownloadButton: false,
      showURNButton: false
    },
    elasticSearch: {
      enableFilters: true,
      enableSortOptions: true,
      filterGroupsOpenByDefault: ["Years"],
      hitsPerPage: 15,
      indices: ["jansson"],
      openReadingTextWithComments: false,
      textHighlightFragmentSize: 150,
      textHighlightType: "fvh",
      textTitleHighlightType: "fvh",
      typeFilterGroupOptions: ["ms"],
      fixedFilters: [
        {
          terms: {
            deleted: ["0"]
          }
        },
        {
          terms: {
            published: ["1", "2"]
          }
        }
      ],
      additionalSourceFields: [],
      aggregations: {
        Years: {
          date_histogram: {
            field: "orig_date_sort",
            calendar_interval: "year",
            format: "yyyy"
          }
        }
      }
    },
    foreword: {
      showURNButton: true,
      showViewOptionsButton: true
    },
    home: {
      bannerImage: {
        altTexts: {
          sv: "Svartvitt foto av en kvinna med kort hår och stickad tröja som sitter vid ett skrivbord, omgiven av papper och teckningar, och skriver under en bordslampa.",
          en: "Black and white photo of a woman with short hair and a knitted sweater sitting at a desk, surrounded by papers and drawings, writing under a desk lamp."
        },
        intrinsicSize: {
          height: 1930,
          width: 3840
        },
        orientationPortrait: false,
        alternateSources: [
          {
            media: "(orientation: portrait) and (min-resolution: 2x)",
            srcset: "assets/images/tove-jansson-2574x2574.avif 2574w",
            type: "image/avif"
          },
          {
            media: "(orientation: portrait) and (min-resolution: 2x)",
            srcset: "assets/images/tove-jansson-2574x2574.jpg 2574w",
            type: "image/jpeg"
          },
          {
            media: "(orientation: portrait) and (max-height: 860px)",
            srcset: "assets/images/tove-jansson-1287x1287.avif 1287w",
            type: "image/avif"
          },
          {
            media: "(orientation: portrait) and (max-height: 860px)",
            srcset: "assets/images/tove-jansson-1287x1287.jpg 1287w",
            type: "image/jpeg"
          },
          {
            media: "(max-height: 965px) and (max-resolution: 1x)",
            srcset: "assets/images/tove-jansson-1920x965.avif 1920w",
            type: "image/avif"
          },
          {
            media: "(max-height: 965px) and (max-resolution: 1x)",
            srcset: "assets/images/tove-jansson-1920x965.jpg 1920w",
            type: "image/jpeg"
          },
          {
            media: "((max-height: 1287px) and (max-resolution: 1x)) or (max-height: 910px)",
            srcset: "assets/images/tove-jansson-2560x1287.avif 2560w",
            type: "image/avif"
          },
          {
            media: "((max-height: 1287px) and (max-resolution: 1x)) or (max-height: 910px)",
            srcset: "assets/images/tove-jansson-2560x1287.jpg 2560w",
            type: "image/jpeg"
          },
          {
            srcset: "assets/images/tove-jansson-3840x1930.avif 3840w",
            type: "image/avif"
          },
          {
            srcset: "assets/images/tove-jansson-3840x1930.jpg 3840w",
            type: "image/jpeg"
          }
        ],
        URL: "assets/images/tove-jansson-3840x1930.jpg"
      },
      portraitOrientationSettings: {
        imagePlacement: {
          onRight: false,
          squareCroppedVerticalOffset: "10%"
        },
        siteTitleOnImageOnSmallScreens: false
      },
      showContentGrid: false,
      showFooter: true,
      showSearchbar: false
    },
    index: {
      keywords: {
        maxFetchSize: 500,
        showFilter: true,
        publishedStatus: 2
      },
      persons: {
        database: "elastic",
        maxFetchSize: 500,
        showFilter: true,
        publishedStatus: 2
      },
      places: {
        maxFetchSize: 500,
        showFilter: true,
        publishedStatus: 2
      },
      works: {
        publishedStatus: 2
      }
    },
    introduction: {
      hasSeparateTOC: true,
      showTextDownloadButton: true,
      showURNButton: true,
      showViewOptionsButton: true,
      viewOptions: {
        personInfo: false,
        placeInfo: false,
        workInfo: false,
        paragraphNumbering: true,
        pageBreakEdition: false
      }
    },
    mediaCollection: {
      showURNButton: true
    },
    text: {
      defaultViews: ["manuscripts", "facsimiles", "metadata"],
      defaultViewOptions: [],
      showTextDownloadButton: false,
      showURNButton: true,
      showViewOptionsButton: true,
      viewOptions: {
        comments: false,
        personInfo: false,
        placeInfo: false,
        emendations: false,
        normalisations: false,
        workInfo: false,
        abbreviations: true,
        paragraphNumbering: false,
        pageBreakOriginal: true,
        pageBreakEdition: false
      },
      variantViewOptions: {
        showVariationTypeOption: false,
        defaultVariationType: "all"
      },
      viewTypes: {
        showAll: true,
        readingtext: false,
        comments: false,
        facsimiles: true,
        manuscripts: true,
        variants: false,
        illustrations: false,
        legend: true,
        metadata: true
      },
      viewTypeDisabledCollections: {
        readingtext: [],
        comments: [],
        facsimiles: [],
        manuscripts: [],
        variants: [],
        illustrations: [],
        legend: [],
        metadata: []
      }
    },
    title: {
      loadContentFromMarkdown: false,
      showURNButton: true,
      showViewOptionsButton: true
    }
  },
  component: {
    collectionSideMenu: {
      sortableCollectionsAlphabetical: [],
      sortableCollectionsChronological: [],
      sortableCollectionsCategorical: [],
      categoricalSortingPrimaryKey: "",
      categoricalSortingSecondaryKey: ""
    },
    contentGrid: {
      includeArticles: false,
      includeEbooks: false,
      includeMediaCollection: false,
      mediaCollectionCoverURL: "",
      mediaCollectionCoverAltTexts: {
        sv: "Alt-text",
        en: "Alt-teksti"
      },
      showTitles: true
    },
    facsimiles: {
      imageQuality: 4,
      showTitle: true
    },
    mainSideMenu: {
      items: {
        about: true,
        articles: true,
        ebooks: false,
        collections: true,
        mediaCollections: false,
        indexKeywords: false,
        indexPersons: false,
        indexPlaces: false,
        indexWorks: false,
        search: true,
        cookiePolicy: true,
        termsOfUse: true,
        privacyPolicy: true,
        accessibilityStatement: false,
      },
      defaultExpanded: true,
      ungroupArticles: true
    },
    manuscripts: {
      showTitle: true,
      showNormalizedToggle: true,
      showOpenLegendButton: true
    },
    topMenu: {
      showAboutButton: false,
      showContentButton: true,
      showElasticSearchButton: true,
      showLanguageButton: true
    },
    variants: {
      showOpenLegendButton: true
    }
  },
  modal: {
    downloadTexts: {
      introductionFormats: {
        xml: false,
        html: false,
        xhtml: false,
        txt: false,
        print: false
      },
      readingTextFormats: {
        xml: false,
        html: false,
        xhtml: false,
        txt: false,
        print: false
      },
      commentsFormats: {
        xml: false,
        html: false,
        xhtml: false,
        txt: false,
        print: false
      },
      manuscriptsFormats: {
        xml: false,
        html: false,
        xhtml: false,
        txt: false,
        print: false
      }
    },
    fullscreenImageViewer: {
      imageQuality: 4
    },
    referenceData: {
      URNResolverURL: "https://urn.fi/",
    },
    namedEntity: {
      showAliasAndPrevLastName: false,
      showArticleData: false,
      showCityRegionCountry: false,
      showDescriptionLabel: false,
      showGalleryOccurrences: false,
      showMediaData: false,
      showOccupation: false,
      showOccurrences: true,
      showType: false,
      useSimpleWorkMetadata: false
    }
  }
}
