import { useMemo, useState } from 'react'
import Check from 'lucide-react/dist/esm/icons/check.mjs'
import Code2 from 'lucide-react/dist/esm/icons/code-2.mjs'
import FileDown from 'lucide-react/dist/esm/icons/file-down.mjs'
import Printer from 'lucide-react/dist/esm/icons/printer.mjs'
import Search from 'lucide-react/dist/esm/icons/search.mjs'
import X from 'lucide-react/dist/esm/icons/x.mjs'
import { languages, pages } from './data'

const normalize = (value) => value.toLowerCase().replace(/\s+/g, ' ')

function CheatTable({ section, activeLanguages, query }) {
  const visibleLanguages = languages.filter((language) => activeLanguages.includes(language.key))
  const matchingRows = useMemo(() => {
    if (!query) return section.rows
    const needle = normalize(query)
    if (normalize(section.title).includes(needle)) return section.rows
    return section.rows.filter((item) =>
      normalize([item.operation, ...visibleLanguages.map(({ key }) => item[key])].join(' ')).includes(needle),
    )
  }, [section.rows, visibleLanguages, query])

  if (query && matchingRows.length === 0) return null

  return (
    <section className="cheat-card">
      <div className="card-title-row">
        <h3>{section.title}</h3>
        {section.badge && <span className="card-badge">{section.badge}</span>}
      </div>
      <div className="table-scroll">
        <table style={{ '--language-count': visibleLanguages.length }}>
          <thead>
            <tr>
              <th>Operation</th>
              {visibleLanguages.map((language) => <th key={language.key}>{language.label}</th>)}
            </tr>
          </thead>
          <tbody>
            {matchingRows.map((item) => (
              <tr key={`${section.title}-${item.operation}`}>
                <td>{item.operation}</td>
                {visibleLanguages.map((language) => <td key={language.key}><code>{item[language.key]}</code></td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function App() {
  const [query, setQuery] = useState('')
  const [activeLanguages, setActiveLanguages] = useState(languages.map(({ key }) => key))

  const toggleLanguage = (key) => {
    setActiveLanguages((current) => {
      if (current.includes(key) && current.length === 1) return current
      return current.includes(key) ? current.filter((item) => item !== key) : [...current, key]
    })
  }

  const resultCount = useMemo(() => {
    if (!query) return null
    const needle = normalize(query)
    return pages.reduce((count, page) => count + page.sections.reduce((sum, section) => (
      sum + section.rows.filter((item) => normalize([item.operation, ...activeLanguages.map((key) => item[key])].join(' ')).includes(needle)).length
    ), 0), 0)
  }, [query, activeLanguages])

  return (
    <div className="app-shell">
      <header className="topbar">
        <a href="#top" className="brand" aria-label="返回顶部">
          <span className="brand-mark"><Code2 size={18} strokeWidth={2.4} /></span>
          <span>LC / QUICKREF</span>
        </a>
        <nav className="top-links" aria-label="页面操作">
          <span>Python · JavaScript · C#</span>
          <button className="print-button" onClick={() => window.print()}>
            <FileDown size={17} /> 导出 PDF
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero screen-only">
          <div className="hero-copy">
            <span className="kicker">ALGORITHM FIELD NOTES · 2026</span>
            <h1>LeetCode<br /><em>语法速查手册</em></h1>
            <p>三种语言，一套思路。把最常用的容器、字符串、算法模板和复杂度整理成可搜索、可打印的 7 页速查手册。</p>
          </div>
          <div className="hero-meta" aria-label="手册信息">
            <div><strong>07</strong><span>PRINTABLE PAGES</span></div>
            <div><strong>03</strong><span>LANGUAGES</span></div>
            <div><strong>A4</strong><span>PRINT READY</span></div>
          </div>
        </section>

        <section className="workspace">
          <aside className="sidebar screen-only">
            <div className="sidebar-block">
              <p className="sidebar-label">CONTENTS</p>
              <nav className="chapter-nav">
                {pages.map((page, index) => (
                  <a key={page.id} href={`#${page.id}`}>
                    <span>{String(index + 1).padStart(2, '0')}</span>{page.shortTitle}
                  </a>
                ))}
              </nav>
            </div>
            <div className="tip-card">
              <span>打印提示</span>
              <p>点击“导出 PDF”，在浏览器打印窗口中选择“另存为 PDF”，纸张设为 A4。</p>
            </div>
          </aside>

          <div className="content-column">
            <div className="controls screen-only">
              <label className="search-box">
                <Search size={18} />
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索操作或语法，例如 sort、Map、BFS..." />
                {query && <button aria-label="清空搜索" onClick={() => setQuery('')}><X size={16} /></button>}
              </label>
              <div className="language-switcher" aria-label="选择语言列">
                {languages.map((language) => {
                  const active = activeLanguages.includes(language.key)
                  return <button className={active ? 'active' : ''} key={language.key} onClick={() => toggleLanguage(language.key)}>{active && <Check size={14} />}{language.label}</button>
                })}
              </div>
              <button className="icon-print" onClick={() => window.print()} aria-label="打印"><Printer size={19} /></button>
            </div>
            {query && <p className="search-status screen-only">找到 <strong>{resultCount}</strong> 条匹配语法</p>}

            <div className="pages">
              {pages.map((page, pageIndex) => {
                const matchingSections = page.sections.filter((section) => {
                  if (!query) return true
                  const needle = normalize(query)
                  return normalize(section.title).includes(needle) || section.rows.some((item) => normalize([item.operation, ...activeLanguages.map((key) => item[key])].join(' ')).includes(needle))
                })
                if (query && matchingSections.length === 0) return null
                return (
                  <article className="print-page" id={page.id} key={page.id}>
                    <header className="page-header">
                      <div>
                        <span className="page-eyebrow">{page.eyebrow}</span>
                        <h2>{page.title}</h2>
                      </div>
                      <div className="page-number"><span>{String(pageIndex + 1).padStart(2, '0')}</span> / 07</div>
                    </header>
                    <div className="page-body">
                      {matchingSections.map((section) => <CheatTable key={section.title} section={section} activeLanguages={activeLanguages} query={query} />)}
                      {page.note && <p className="page-note">{page.note}</p>}
                    </div>
                    <footer className="page-footer"><span>LEETCODE SYNTAX QUICKREF</span><span>PY · JS · C#</span></footer>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
