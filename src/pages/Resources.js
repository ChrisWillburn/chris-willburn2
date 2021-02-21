import React from 'react';

import Layout from '../components/Layout';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';

const ResourcesPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Resources</h2>
          <p>Phasellus non pulvinar erat. Fusce tincidunt nisl eget ipsum.</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Lorem ipsum dolor</h3>
          <p>
            Morbi mattis mi consectetur tortor elementum, varius pellentesque
            velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac
            scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis
            lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo.
            Maecenas sagittis felis ac sagittis semper. Curabitur purus leo
            donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo.
            Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci
            fringilla tincidunt. Aliquam eleifend ligula non velit accumsan
            cursus. Etiam ut gravida sapien.
          </p>

          <h3 className="major">Vitae phasellus</h3>
          <h3 className="major">Text</h3>
						<p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
						This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
						This is <u>underlined</u> and this is code: <code>for (;;) { `{...}` }</code>. Finally, <a href="/#">this is a link</a>.</p>
						<h4>Awesome Quote</h4>
						<blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.</blockquote>

          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Sed feugiat lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Nisl placerat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default ResourcesPage;
